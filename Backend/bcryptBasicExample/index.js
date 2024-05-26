import express from "express";
import mongoose from "mongoose";
import { createUser, login } from "./Controllers/userController.js";
const app = express();

const PORT = "8080";

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

app.get("/signUp", createUser);
app.get("/login", login);

app.listen(PORT, () => {
  connect();
  console.log(`Server started at port ${PORT}`);
});
