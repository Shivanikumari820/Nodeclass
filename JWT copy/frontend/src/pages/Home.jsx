// import axios from "axios";
// import { useState } from "react";


// const Home=()=>{

//   const [image, setImage] = useState("");
//   const handleImage = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     let api = "http://localhost:8000/upload";
//     const formData = new FormData();
//     formData.append("image", image);

//     try {
//       const response = await axios.post(api, formData);
//       console.log(response);
//     } catch(error) {
//       console.error(error);
//     }
//   }
  
//     return(
//         <>
//           <h1> Welcome To Home Page</h1>
//           Upload Image : <input type = "file" onChange={handleImage}/>
//           <button onClick= {handleSubmit}>Upload</button>
//         </>
//     )
// }

// export default Home;


import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!image) {
      alert("Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "mernstack");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dgj0o5wfe/image/upload",
        formData
      );
      console.log("Uploaded successfully:", response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <>
      <h1>Welcome To Home Page</h1>
      <input type="file" onChange={handleImage} />
      <button onClick={handleSubmit}>Upload</button>
    </>
  );
};

export default Home;
