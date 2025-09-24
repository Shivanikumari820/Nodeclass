import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BackendUrl from '../utils/BackendUrl';
import axios from "axios";
import "../css/Login.css";
import { useNavigate } from 'react-router-dom';
const Login=()=>{
const [input, setInput] = useState({});
const navigate = useNavigate();
const handleInput=(e)=>{
  let name=e.target.name;
  let value=e.target.value;
  setInput(values=>({...values, [name]:value}));
  console.log(input);
}
const handleSubmit=async(e)=>{
  e.preventDefault();
  let api=`${BackendUrl}user/login`;
  const response = await axios.post(api, input);
  if (response.status==202)
  {
    localStorage.setItem("username", response.data.user.email);
    localStorage.setItem("useremail", response.data.user.name)
    alert("You are Loged in");
    navigate("/dashboard");
  }
  console.log(response.data.user.email);
}
return(
        <>
          <h1 align="center"> User Login </h1>
           <Form style={{width:"600px", margin:"auto"}}>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name="email"  onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name="password"  onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
       Login
      </Button>
    </Form>
        </>
    )
}
export default Login;