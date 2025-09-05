const express = require("express");
const router = express.Router();
const autherController = require("../controllers/autherController");

router.post("/authersave", autherController.autherSave);
router.get("/display", autherController.autherDisplay); // yeh change karo
router.post("/booksave", autherController.bookSave);
router.post("/bookaddmore", autherController.bookSave);


module.exports = router;
