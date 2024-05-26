import express from "express";
import mongoose, { Mongoose, Schema } from "mongoose";
const app = express();

const PORT = "8080";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kishan9rajput:TIWeb81CJ3mfDdFs@cluster0.s5jvo33.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to DB!");
  } catch (err) {
    console.log(err);
  }
};

app.use(express.json());

app.get("/", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
  });
  await newUser.save();
  res.send("User created!");
});

app.listen(PORT, () => {
  connect();
  console.log(`Server started at port ${PORT}`);
});
