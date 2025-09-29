
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      let api = "http://localhost:8000/emailsend";
      const response = await axios.post(api, input);
      console.log(response.data);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email");
    }
  };

  return (
    <>
      <h1>Employee Data</h1>
      Enter Username :{" "}
      <input type="text" name="username" onChange={handleInput} />
      <br />
      Enter Email:{" "}
      <input type="email" name="email" onChange={handleInput} />
      <br />
      Enter Comment:{" "}
      <input type="text" name="comment" onChange={handleInput} />
      <br />
      <button onClick={handleSubmit}>Save</button>
    </>
  );
};

export default Home;
