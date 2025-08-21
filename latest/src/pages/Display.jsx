import React, { useEffect, useState } from 'react';
import axios from 'axios';
import backendUrl from '../utils/BackendURL';

const Display = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${backendUrl}/students/display`);
      setStudents(response.data);
    } catch (error) {
      console.error('❌ Failed to fetch students:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Records</h2>

      {loading ? (
        <p className="text-center">⏳ Loading...</p>
      ) : students.length === 0 ? (
        <p className="text-center">⚠️ No student data found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped">
            <thead className="table-dark">
              <tr>
                <th>Roll No.</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
              </tr>
            </thead>
            <tbody>
              {students.map((stu) => (
                <tr key={stu._id}>
                  <td>{stu.rollno}</td>
                  <td>{stu.name}</td>
                  <td>{stu.city}</td>
                  <td>₹{stu.fees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Display;
