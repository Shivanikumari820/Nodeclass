const Student = require("../models/stuModel");

// Save student
const stuSave = async (req, res) => {
  try {
    const { rollno, name, city, fees } = req.body;
    const newStudent = new Student({ rollno, name, city, fees });
    const saved = await newStudent.save();
    res.send("✅ Student saved successfully");
  } catch (err) {
    res.send(" Error saving student: " + err.message);
  }
};

// Display all students
const stuDisplay = async (req, res) => {
  try {3
    const students = await Student.find();
    res.send(students);
  } catch (err) {
    res.send(" Error fetching students: " + err.message);
  }
};

// Update student
const stuUpdate = async (req, res) => {
  try {
    await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(" Student updated successfully");
  } catch (err) {
    res.send(" Error updating student: " + err.message);
  }
};

// Delete student
const stuDelete = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.send(" Student deleted successfully");
  } catch (err) {
    res.send(" Error deleting student: " + err.message);
  }
};
// Search student by rollno (POST method using req.body)
const stuSearch = async (req, res) => {
  try {
    const { rollno } = req.body;
    const data = await Student.find({ rollno: parseInt(rollno) });

    if (data.length === 0) {
      res.send([]); // send empty array if not found
    } else {
      res.send(data); // send data if found
    }
  } catch (err) {
    res.send([]); // on error, also send empty array
  }
};


module.exports = {
  stuSave,
  stuDisplay,
  stuUpdate,
  stuDelete,
  stuSearch
};
