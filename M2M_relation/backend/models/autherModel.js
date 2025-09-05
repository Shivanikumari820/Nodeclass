const mongoose = require("mongoose");

const autherSchema = new mongoose.Schema({
    authername: String,
    email: String,
    booksid: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }] // 👈 small i
});

module.exports = mongoose.model("auther", autherSchema);
