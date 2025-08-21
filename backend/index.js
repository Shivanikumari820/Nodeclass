// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const stuRoute = require('./routes/stuRoute');
// const mongoose = require("mongoose");
// const cors = require("cors");

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Routes
// app.use("/students", stuRoute);

// // MongoDB connection

// mongoose.connect("mongodb+srv://shivanikumari4218:dEWhd5IHiOAporay@project1.ojrazgu.mongodb.net/mydb?retryWrites=true&w=majority&appName=project1", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log("✅ MongoDB connected"))
// .catch((err) => console.error("❌ MongoDB connection error:", err.message));


// // Server
// app.listen(8000, () => {
//   console.log("🚀 Server is running on port 8000");
// });


// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const mongoose = require("mongoose");
// const cors = require("cors");

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // ✅ App-level middleware
// app.use((req, res, next) => {
//   console.log("Welcome to app level middleware");
//   next();
// });

// // ✅ Path-level middleware
// const pathMiddleware = (req, res, next) => {
//   console.log("Welcome to path level middleware");
//   next();
// };

// // ✅ Routes
// app.get("/home", pathMiddleware, (req, res) => {
//   res.send("You reached Home route");
// });

// app.get("/about", pathMiddleware, (req, res) => {
//   res.send("You reached About route");
// });

// app.get("/contact", pathMiddleware, (req, res) => {
//   res.send("You reached Contact route");
// });

// // MongoDB connection
// mongoose.connect("mongodb+srv://shivanikumari4218:dEWhd5IHiOAporay@project1.ojrazgu.mongodb.net/mydb?retryWrites=true&w=majority&appName=project1", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB connected"))
// .catch((err) => console.error("❌ MongoDB connection error:", err.message));

// // Server
// app.listen(8000, () => {
//   console.log("🚀 Server is running on port 8000");
// });


// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config(); // ✅ load env variables

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // ✅ App-level middleware
// app.use((req, res, next) => {
//   console.log("Welcome to app level middleware");
//   next();
// });

// // ✅ Path-level middleware
// const pathMiddleware = (req, res, next) => {
//   console.log("Welcome to path level middleware");
//   next();
// };

// // ✅ Routes
// app.get("/home", pathMiddleware, (req, res) => {
//   res.send("You reached Home route");
// });

// app.get("/about", pathMiddleware, (req, res) => {
//   res.send("You reached About route");
// });

// app.get("/contact", pathMiddleware, (req, res) => {
//   res.send("You reached Contact route");
// });

// // MongoDB connection
// mongoose.connect(process.env.DBCON, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB connected"))
// .catch((err) => console.error("❌ MongoDB connection error:", err.message));

// // Server
// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on port ${PORT}`);
// });


//Event in nodejs -->>
// const EventEmitter = require("events");   //  require events
// const event = new EventEmitter();        // create variable

// event.on("doorbell", (nm) => {            // listen (on) event
//   console.log("Event received:" + nm);
// });

// event.emit("doorbell", "Ding Dong!");                // fire event


let fs = require("fs")
let rs = fs.createReadStream("demo.txt")

rs.on("open", () => {
  console.log("File opened successfully");
});

rs.on("error", (err) => {
  console.error("Error occurred while opening file:", err);
});

rs.emit("open");