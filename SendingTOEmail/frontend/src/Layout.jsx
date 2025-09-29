import {Outlet} from "react-router-dom";

const Layout=()=>{
    return(
        <>
      
        <div id="wrapper">
             <Outlet/>
        </div>
           
            
        </>
    )
}

export default Layout;