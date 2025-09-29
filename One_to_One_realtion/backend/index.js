const express = require("express");
const app= express();
const bodyparser = require('body-parser')
const cors = require('cors');
const PORT = 8000
const userRoute = require("./routes/userRoute")
const mongoose = require("mongoose");
app.use(bodyparser.json())
app.use(cors());

mongoose.connect("mongodb://127.0.0.1/anuragrelation").then(()=>{
  console.log("DB Connected!!!");
})



app.use("/", userRoute);



app.listen(PORT, ()=>{
  console.log(`Server run on port ${PORT}`);
})