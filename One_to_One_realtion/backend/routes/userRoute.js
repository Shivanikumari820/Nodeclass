const express = require("express");
const route=express.Router();
const UserController = require("../controllers/userController");
route.post("/usersave", UserController.userSave)
route.get("/display", UserController.userDisplay)

module.exports =route;