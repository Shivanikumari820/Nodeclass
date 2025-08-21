import React, { useState } from 'react';
import axios from 'axios';
import backendUrl from '../utils/BackendURL';

const Search = () => {
  const [rollno, setRollno] = useState('');
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    if (!rollno) return alert("Enter roll number");

    const res = await axios.post(`${backendUrl}/students/search`, { rollno });
    const result = res.data;

    if (result.length === 0) {
      alert("❌ Data not found");
      setData([]); // clear table
    } else {
      setData(result); // show table
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Search Student by Roll No</h2>

      <div className="mb-4 d-flex justify-content-center">
        <input
          type="number"
          placeholder="Enter roll number"
          className="form-control w-50 me-2"
          value={rollno}
          onChange={(e) => setRollno(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
      </div>

      {data.length > 0 && (
        <table >
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>City</th>
              <th>Fees</th>
            </tr>
          </thead>
          <tbody>
            {data.map((stu) => (
              <tr key={stu._id}>
                <td>{stu.rollno}</td>
                <td>{stu.name}</td>
                <td>{stu.city}</td>
                <td>{stu.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Search;
