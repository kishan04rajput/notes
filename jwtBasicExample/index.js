// HEADER.PAYLOAD.SIGNATURE
// JWTs are an open standard for securely transferring data within parties using a JSON object
// They are used for stateless authentication mechanisms. This means maintaining sessions on the client side instead of storing sessions on the server

import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import {
  createUser,
  login,
  userDashBoard,
} from "./Controllers/userController.js";
import { verifyUser } from "./MiddleWare/verifyUser.js";
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
app.use(cookieParser());

app.post("/signUp", createUser);
app.post("/login", login);
app.get("/userDashboard", verifyUser, userDashBoard);

app.listen(PORT, () => {
  connect();
  console.log(`Server started at port ${PORT}`);
});
