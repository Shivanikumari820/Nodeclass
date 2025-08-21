import React, { useState } from 'react';
import axios from 'axios';
import backendUrl from '../utils/BackendURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Insert = () => {
  const [formData, setFormData] = useState({
    rollno: '',
    name: '',
    city: '',
    fees: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting...", formData);

    try {
      const response = await axios.post(`${backendUrl}/students/save`, formData);
      console.log('✅ Server Response:', response.data);

      toast.success('✅ Data inserted successfully!', {
        position: 'top-right',
        autoClose: 3000
      });

      setFormData({ rollno: '', name: '', city: '', fees: '' });
    } catch (error) {
      console.error('❌ Error:', error.response?.data || error.message);
      toast.error('❌ Failed to insert data: ' + (error.response?.data?.details || error.message), {
        position: 'top-right',
        autoClose: 4000
      });
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <h2 className="text-center mb-4">Insert Student Data</h2>

      <form className="w-50 mx-auto p-4 border rounded shadow bg-light" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Roll No.</label>
          <input
            type="number"
            className="form-control"
            name="rollno"
            placeholder="Enter roll number"
            value={formData.rollno}
            onChange={handleInput}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleInput}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            placeholder="Enter city"
            value={formData.city}
            onChange={handleInput}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Fees</label>
          <input
            type="number"
            className="form-control"
            name="fees"
            placeholder="Enter fees"
            value={formData.fees}
            onChange={handleInput}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Insert</button>
      </form>
    </div>
  );
};

export default Insert;
