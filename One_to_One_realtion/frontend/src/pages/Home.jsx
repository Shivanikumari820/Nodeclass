import { useState } from "react"
import axios from "axios"

const Home=()=>{
  const [input, setInput] = useState({});
  const handleInput=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setInput(values=>({...values, [name]:value}))
    console.log(input)
  }

  const handleSubmit=async()=>{
    // let api = "http://localhost:8000/usersave"
    let api = "http://localhost:8000/emailsend"

    const response = await axios.post(api, input)
    console.log(response)
  }

  
      return(
        <>
         <h1>Employee Data</h1>
        Enter Username : <input type="text" name="username" onChange={handleInput}/>
        <br />
        Enter Email: <input type="email" name="email" onChange={handleInput} />
        <br />
         Enter Comment: <input type="text" name="comment" onChange={handleInput} />
        <br />
       
        {/* <h1>Employee Data</h1>
        Enter Username : <input type="text" name="username" onChange={handleInput}/>
        <br />
        Email : <input type="text" name="email" onChange={handleInput} />
        <br />
        Firstname: <input type="text" name="firstname" onChange={handleInput} />
        <br />
        Lastname: <input type="text" name="lastname" onChange={handleInput} />
        <br /> */}
        <button onClick={handleSubmit}>Save</button>

        </>
      )

}

export default Home;