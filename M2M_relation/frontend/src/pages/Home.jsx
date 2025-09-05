import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [Input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({...values, [name]: value}))
    console.log(Input)
  }

  const handleSubmit = async () => {
    let api = 'http://localhost:8000/authersave';
    const response = await axios.post(api, Input);
    console.log(response);
  }

  return(
    <>
      <h1>Enter Author Detail</h1>
      Enter Author name: <input type="text" name="authername" onChange={handleInput} /><br />
      Enter Email: <input type="text" name="email" onChange={handleInput} /><br />
      Book name: <input type="text" name="bookname" onChange={handleInput} /><br />
      Price: <input type="text" name="price" onChange={handleInput} /><br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Home;
