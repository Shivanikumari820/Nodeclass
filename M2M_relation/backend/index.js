const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
const autherRoute = require("./routes/autherRoute");

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/shivrelation")
.then(() => {
    console.log("DB Connected");
})
.catch((err) => {
    console.error("DB Connection Error:", err);
});

app.use("/", autherRoute);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});
