/*cookies: -Cookies are small pieces of data (key–value pairs) that a server can send to a user’s browser. The browser then stores them and sends them back with every future request to the same server.

They’re like little notes your server gives to the browser:

“Hey, remember this information and give it back to me next time you visit.”


-->> isko frontend se mtlb nhi jo hoga server pr hoga okiee itna hi code h 
*/

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const mongoose = require('mongoose');
// require('dotenv').config();   

// const app = express();
// const PORT = process.env.PORT || 8000;

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors({
//   origin: 'http://localhost:5173',
//   credentials: true
// }));
// app.use(cookieParser());                // ye middleare h cookie-parser isliye isko phle install krke require kro then use kro 

// // MongoDB connection
// mongoose.connect(process.env.DBCON, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log("DB Connected!!!"))
// .catch(err => console.error("DB Connection Failed:", err.message));

// // Route to set cookies
// app.get("/cookie", (req, res) => {
//   res.cookie("myname", "shivani", { maxAge: 60 * 1000 });   // isme 3 chije dete h first name , then {value} , then expire time in mili second , baaki tum option me {httponly:true} to koi or browser access ni krega , or bhi chije h secure krne k liye 
//   res.cookie("course", "Btech", { maxAge: 60 * 1000 });
//   res.send("Cookies have been set!");
// });

// // Route to read cookies
// app.get("/display", (req, res) => {
//   const { myname, course } = req.cookies;
//   console.log(req.cookies);                            //req.cookies help to display cookies on browser 
//   res.send({ nm: myname, crs: course });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





//ye button wala h button pr click krne pr kaam cookies set ho--->>
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.urlencoded({ extended: true })); // replaces bodyParser
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(cookieParser());  // allows reading cookies

// MongoDB connection
mongoose.connect(process.env.DBCON, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("DB Connected!!!"))
.catch(err => console.error("DB Connection Failed:", err.message));

// Route to set cookies
app.get("/cookie", (req, res) => {
  res.cookie("myname", "shivani", { 
    maxAge: 60 * 1000, 
    httpOnly: true,    // cannot be accessed by JS
    sameSite: "lax"    // CSRF protection
  });
  res.cookie("course", "Btech", { maxAge: 60 * 1000 });
  res.send("Cookies have been set!");
});

// Route to read cookies
app.get("/display", (req, res) => {
  const { myname, course } = req.cookies;
  console.log(req.cookies); // shows all cookies in console
  res.send({ nm: myname, crs: course });
});

// Route to clear cookies
app.get("/clear", (req, res) => {
  res.clearCookie("myname");
  res.clearCookie("course");
  res.send("Cookies cleared!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
