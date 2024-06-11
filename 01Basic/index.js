const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("this is working");
});

app.get("/login", (req, res) => {
  res.send("<h1> login page is working</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
