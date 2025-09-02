const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const mongoose = require("mongoose");
const multer = require("multer");
require("dotenv").config();
const { v2 } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

// DB connection
mongoose.connect(process.env.DBCON).then(() => {
  console.log("DB Connected!!!");
});

// Cloudinary Config
v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer Storage with Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: v2,
  params: {
    folder: "mern_uploads",
    allowed_formats: ["jpg", "png", "jpeg", "pdf"],
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 3000000 }, // 3MB limit
});

// Multiple file upload API
app.post("/upload-multiple", upload.array("files", 10), (req, res) => {
  try {
    const urls = req.files.map((file) => file.path); // Cloudinary URLs
    res.json({ success: true, files: urls });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.use("/user", userRoute);

const Port = process.env.PORT || 8000;

app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});
