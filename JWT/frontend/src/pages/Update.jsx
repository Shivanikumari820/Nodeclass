import { useState, useEffect } from "react";
import BackendUrl from "../utils/BackendUrl";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Update = () => {
  const [mydata, setMydata] = useState([]);
  const navigate= useNavigate();

  const loadData = async () => {
    let api = `${BackendUrl}students/updateshow`;
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }
  useEffect(() => {
    loadData();
  }, []);
 const myDel=async(id)=>{
     let api = `${BackendUrl}students/delete/${id}`;
     const response  = await axios.delete(api);
     console.log(response);
     loadData();
 }

 const myEdit=async(id)=>{
      navigate(`/myedit/${id}`);
 }


  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td> {key.rollno} </td>
          <td> {key.name} </td>
          <td> {key.city} </td>
          <td> {key.fees} </td>
          <td> 
            <button onClick={()=>{myEdit(key._id)}} >Edit</button>
          </td>
          <td> 
            <button onClick={()=>{myDel(key._id)}}>Delete</button>
          </td>
        </tr>
      </>
    )
  })
  return (
    <>
      <h1> Update Page</h1>
      <Table striped bordered hover align="center" style={{ width: "600px" }}>
        <thead>
          <tr>
            <th>#Rollno</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ans}
        </tbody>
      </Table>
    </>
  )
}
export default Update;