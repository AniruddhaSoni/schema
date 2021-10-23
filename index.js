require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const apiRoute = require("./routes/Api");

const port = process.env.PORT || 3000;

app.use("/api", apiRoute);

app.get("/", (req, res) => {
  res.send("I am on");
});
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to database");
});

app.listen(port);
