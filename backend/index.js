const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const authController = require("./controller/authController");
const roomController = require("./controller/roomcontroller");
const dotenv = require("dotenv").config();
const app = express();

//2==>connect db
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, () =>
  console.log("database is connected")
);

//3==> middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/auth', authController)
app.use('/room', roomController)


//2==> start our server
app.listen(process.env.PORT, () => console.log("server is connected"));
