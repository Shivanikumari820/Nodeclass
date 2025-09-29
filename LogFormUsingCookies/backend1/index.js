const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173", // React frontend
  credentials: true
}));


// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/cookieAuth", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Database connected"))
  .catch(err => console.error("DB connection error:", err));

// Routes
app.use("/", authRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
