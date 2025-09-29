import { useState,useEffect } from 'react';
import axios from "axios";
const Registration=()=>{
const [mydata, setMydata] = useState({});

const loadData=async()=>{
  let api="http://localhost:8000/display"
  const response = await axios.get(api)
  console.log(response.data);
  setMydata(response.data)
}

useEffect(()=>{
  loadData()
}, [])

const ans = mydata.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.firstname}</td>
      <td>{key.lastname}</td>
      <td>{key.userid.email}</td>
      <td>{key.userid.username}</td>
      </tr>    
    </>
  )
})
return(
        <>
          <h1 align="center"> User Data </h1>
           <table>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>UserID</th>
            </tr>
            {ans}
           </table>
        </>
    )
}
export default Registration;