const express = require("express");
const usersController = require("../controllers/users");
const router = express.Router();

router.get("/", usersController.retrieveAll);

router.post("/register", usersController.register);

router.post("/login", usersController.login);

router.post("/getAllUsers", usersController.retrieveAll);

router.get("/getUserByPseudo", usersController.retrieveByUsername);

module.exports = router;
