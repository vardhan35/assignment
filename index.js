import express from "express";
import bodyParser from "body-parser";
import Data from "./Data.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  Data.users
    .find((user) => user.email === email)
    .then((err, user) => {
      if (user) {
        if (password === user.password) {
          res.send({ message: "Login Successfull", user: user });
          console.log("Login Successfull");
        } else {
          res.send({ message: "Login Failed" });
        }
      } else {
        res.send({ message: "User Not Found" });
      }
    });
});

app.listen(PORT, () => {
  console.log("Seerver Running on 5000");
});
