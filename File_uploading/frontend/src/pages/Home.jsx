//Direct upload on cloudinary no relation with backend --->>

// import axios from "axios";
// import { useState } from "react";

// const Home = () => {
//   const [image, setImage] = useState(null);

//   const handleImage = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async () => {
//     if (!image) {
//       alert("Please select an image first");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", image);
//     formData.append("upload_preset", "mernstack");
//     // formData.append("cloud_name", "dgj0o5wfe"); // its optional because already given in api url




//   try {
//    const response = await axios.post("https://api.cloudinary.com/v1_1/dgj0o5wfe/image/upload", formData );
//   console.log(response);
//   alert("Uploaded successfully!");
// } catch(error) {
//   console.error(error);
//   alert("Upload failed, please try again!");
// }
//   };
//   return (
//     <>
//       <h1>Welcome To Home Page</h1>
//       <input type="file" onChange={handleImage} />
//       <button onClick={handleSubmit}>Upload</button>
//     </>
//   );
// };

// export default Home;


//Now Upload first on server then Cloudinary 
import React, { useState } from "react";
import axios from "axios";
const Home=()=>{
  const [files, setFiles] = useState([]);
 const [uploadedUrls, setUploadedUrls] = useState([]);
 const handleUpload = async () => {
  if (!files.length) return alert("Please select files");
 const formData = new FormData();
 for (let i = 0; i < files.length; i++) {
 formData.append("files", files[i]);
 }
 try {
 const res = await axios.post("http://localhost:5000/upload-multiple",
formData, {
 headers: { "Content-Type": "multipart/form-data" },
 });
 setUploadedUrls(res.data.files);
 } catch (err) {
 console.error(err);
 }
 };
 return (
 <div>
 <h2>Upload Multiple Files to Cloudinary</h2>
 <input type="file" multiple onChange={(e) => setFiles([...e.target.files])}
/>
 <button onClick={handleUpload}>Upload</button>


 {uploadedUrls.length > 0 && (
 <div>
 <h3>Uploaded Files:</h3>
 {uploadedUrls.map((url, index) => (
 <div key={index} style={{ margin: "10px 0" }}>
 <a href={url} target="_blank" rel="noreferrer">{url}</a>
 <br />
 {url.match(/\.(jpg|jpeg|png)$/) && (
 <img src={url} alt="uploaded" style={{ width: "200px", marginTop:
"5px" }} />
 )}
 </div>
 ))}
 </div>
 )}
 </div>
 );
}
export default Home;
