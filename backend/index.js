const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();

//connect db
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, () =>
  console.log("database is connected")
);

// start our server

app.listen(process.env.PORT, () => console.log("server is connected"));
