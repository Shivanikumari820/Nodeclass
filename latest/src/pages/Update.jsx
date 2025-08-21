// src/pages/Update.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import backendUrl from '../utils/BackendURL';

const Update = () => {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(`${backendUrl}/students/display`);
      setStudents(res.data);
    } catch (error) {
      alert("Failed to fetch students");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleEditClick = (student) => {
    setEditStudent(student);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendUrl}/students/delete/${id}`);
      alert("Deleted successfully!");
      fetchStudents();
    } catch (error) {
      alert("Failed to delete!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditStudent({ ...editStudent, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${backendUrl}/students/update/${editStudent._id}`, editStudent);
      alert("Updated successfully!");
      setEditStudent(null);
      fetchStudents();
    } catch (error) {
      alert("Update failed!");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Update or Delete Student</h2>

      {/* Edit Form */}
      {editStudent && (
        <form className="w-50 mx-auto p-4 border rounded shadow bg-light" onSubmit={handleUpdate}>
          <h4>Edit Student</h4>
          <div className="mb-3">
            <label>Roll No</label>
            <input type="number" name="rollno" className="form-control" value={editStudent.rollno} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label>Name</label>
            <input type="text" name="name" className="form-control" value={editStudent.name} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label>City</label>
            <input type="text" name="city" className="form-control" value={editStudent.city} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label>Fees</label>
            <input type="number" name="fees" className="form-control" value={editStudent.fees} onChange={handleInputChange} required />
          </div>
          <button type="submit" className="btn btn-warning w-100">Update</button>
        </form>
      )}

      {/* Student List */}
      <table className="table mt-5 table-bordered table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu) => (
            <tr key={stu._id}>
              <td>{stu.rollno}</td>
              <td>{stu.name}</td>
              <td>{stu.city}</td>
              <td>{stu.fees}</td>
              <td>
                <button className="btn btn-sm btn-info me-2" onClick={() => handleEditClick(stu)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(stu._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Update;
