const express = require("express");
const usersController = require("../controllers/users");
const router = express.Router();

router.get("/", usersController.retrieveAll);

router.post("/register", usersController.register);

router.post("/login", usersController.login);

router.get("/getAllUsers", usersController.retrieveAll);

router.get("/getUserByUsername", usersController.retrieveByUsername);

router.get("/remove", usersController.remove);

module.exports = router;
