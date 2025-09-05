import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [mydata, setMydata] = useState([]);
  const navigate = useNavigate();

  const loadData = async () => {
    let api = "http://localhost:8000/display";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const addBook = (id) => {
    navigate(`/addmore/${id}`);
  };
  const ans = mydata.map((item) => {
    return (
      <>
      <tr>
        <td>{item.authername}</td>
        <td>{item.email}</td>
        <td>
          {item.booksid.map((item1) => {
            return (
              <>
                <p>
                  <span>{item1.bookname} - {item1.price}</span>
                </p>
              </>
            );
          })
          }
        </td>
        <td>
          <button onClick={() => addBook(item._id)}>Add more Book</button>
        </td>
      </tr>
      </>
  );
});
return (
    <>
      <table border={1} style={{ margin: "auto", marginTop: "50px" }}>
          <tr>
            <th>Author Name</th>
            <th>Email</th>
            <th>Books Details</th>
          </tr>
          {ans}
      </table>
    </>
  );
};

export default Registration;
