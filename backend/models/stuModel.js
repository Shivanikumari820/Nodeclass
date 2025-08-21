const mongoose = require("mongoose");

// Define student schema with validation
const stuSchema = new mongoose.Schema({
  rollno: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  fees: {
    type: Number,
    required: true,
    min: 0
  }
});

// Create and export the model
const Student = mongoose.model("Student", stuSchema);
module.exports = Student;
