const bookModel = require('../models/bookModel');
const autherModel = require('../models/autherModel');

const autherSave = async (req, res) => {
    const { authername, email, bookname, price } = req.body;
    const book = await bookModel.create({
        bookname: bookname,
        price: price
    });

    const auther = await autherModel.create({
        authername: authername,
        email: email,
    });

    await autherModel.findByIdAndUpdate(auther._id, { $push: {booksid: book._id } });
    res.send("data save!");
};

const autherDisplay = async (req, res) => {
    const auther = await autherModel.find().populate("booksid"); // 👈 ab match karega
    res.send(auther);
};


const bookSave = async (req, res) => {
    const { id, bookname, price } = req.body;
    const book = await bookModel.create({
        bookname: bookname,
        price: price
    });
    await autherModel.findByIdAndUpdate(id, { $push: { booksid: book._id } });
    res.send("OK");
};

module.exports = {
    autherSave,
    autherDisplay,
    bookSave
};
