const express = require("express");
const router = express.Router();
const stuController = require("../controllers/stuController");

router.post("/save", stuController.stuSave);
router.get("/display", stuController.stuDisplay);
router.put("/update/:id", stuController.stuUpdate);  
router.delete("/delete/:id", stuController.stuDelete); 
router.post("/search", stuController.stuSearch);  


module.exports = router;
