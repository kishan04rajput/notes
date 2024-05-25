import bcrypt from "bcrypt";
import userModel from "../Model/userModel.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  //bcrypt
  const saltRounds = 10;
  const myPlaintextPassword = req.body.password;
  console.log(myPlaintextPassword);
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(myPlaintextPassword, salt);
  //createuser service
  const newUser = new userModel({
    name: req.body.name,
    password: hash,
  });
  await newUser.save();
  res.send("User created!");
};

export const login = async (req, res) => {
  //destructure req.body and put same name for destructed items.
  const { name, password } = req.body;
  //findOne to find the username in the users collection
  const User = await userModel.findOne({ name: name });
  // console.log(User.name);
  // console.log(User.password);
  if (!User) {
    return res.send("Wrong User Name!");
  }
  if (!bcrypt.compareSync(password, User.password)) {
    return res.send("Wrong password!");
  }
  const { _id, name: userName, isAdmin } = User;
  // console.log(userName);
  //creating jwt token using sign method
  const token = jwt.sign(
    { id: _id, name: userName, isAdmin: isAdmin },
    "SECRETKEY"
  );
  res.cookie("token", token).send("User logged in successfully!");
};

export const userDashBoard = (req, res) => {
  res.send(`${req.name} userdashboard!`);
};
