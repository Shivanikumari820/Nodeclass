import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const UserDashboard=()=>{
    const navigate = useNavigate();
    const logout=()=>{
          localStorage.clear();
         navigate("/login");
    }
   useEffect(()=>{
       if (!localStorage.getItem("username"))
       {
         navigate("/login");
       }
   })
    return(
        <>
          <h1> Welcome To User DashBoard</h1>
          <div style={{backgroundColor:"lightblue", padding:"20px"}}>
            Welcome : {localStorage.getItem("username") }  Email : {localStorage.getItem("useremail")}
            <a href="#" onClick={logout}>Logout</a> 
          </div>
        </>
    )
}
export default UserDashboard;