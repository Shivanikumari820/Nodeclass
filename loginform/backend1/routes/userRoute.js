const express = require("express");
const route=express.Router();
const UserController = require("../controllers/userController");
route.post("/registration",  UserController.userRegistration);
route.post("/login",  UserController.userLogin);

module.exports =route;
