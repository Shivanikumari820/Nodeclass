import { useState } from "react";
import BackendUrl from "../utils/BackendUrl";
import axios from "axios";
import Table from 'react-bootstrap/Table';
const Search = () => {
  const [rno, setRno] = useState();
  const [mydata, setMydata] = useState([]);
  const handleSubmit = async () => {
    let api = `${BackendUrl}students/search`;
    const response = await axios.post(api, { rollno: rno });
    console.log(response.data);
    setMydata(response.data);
  }
  return (
    <>
      <h1> Search Data</h1>
      Enter Rollno : <input type="text" value={rno} onChange={(e) => {setRno(e.target.value)}} />
      <button onClick={handleSubmit}>Search</button>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#Rollno</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>
          {mydata.length >= 1 && mydata.map((key) => {
            return (
              <>
                <tr>
                  <td> {key.rollno} </td>
                  <td> {key.name} </td>
                  <td> {key.city} </td>
                  <td> {key.fees} </td>
                </tr>
              </>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}
export default Search;