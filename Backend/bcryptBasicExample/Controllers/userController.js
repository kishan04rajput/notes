import bcrypt from "bcrypt";
import userModel from "../Model/userModel.js";

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
  const userName = req.body.name;
  const password = req.body.password;

  //findOne to find the username in the users collection
  const User = await userModel.findOne({ name: userName });
  // console.log(User.name);
  // console.log(User.password);
  if (!User) {
    return res.send("Wrong User Name!");
  }
  if (!bcrypt.compareSync(password, User.password)) {
    return res.send("Wrong password!");
  }
  res.send("User logged in successfully!");
};
