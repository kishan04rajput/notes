import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  // console.log(token);
  if (!token) {
    return res.send("Please login!");
  }
  try {
    const decoded = jwt.verify(token, "SECRETKEY");
    console.log("decoded\n", decoded);
    req.name = decoded.name;
    next();
  } catch (err) {
    res.send("You are not authorised!");
  }
};
