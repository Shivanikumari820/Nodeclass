const express = require("express");
const app= express();
const bodyparser = require('body-parser')
const cors = require('cors');
const userRoute = require("./routes/userRoute")
const mongoose = require("mongoose");
const multer = require("multer");
require("dotenv").config();

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());

mongoose.connect(process.env.DBCON).then(()=>{
  console.log("DB Connected!!!");
})

// multer middleware help to upload file from client to server 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const myupload = multer({
  storage: storage,
  limits: { fileSize: 3000000 }
});

app.post("/upload", myupload.single("image"), (req, res) => {
  res.send("File uploaded successfully");
});
 

app.use("/user", userRoute);
 

const Port = process.env.PORT || 8000

app.listen(Port, ()=>{
  console.log(`Server run on port ${Port}`);
})  