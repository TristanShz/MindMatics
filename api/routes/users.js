const express = require("express");
const usersController = require("../controllers/users");
const router = express.Router();
const checkJwtToken = require("../middlewares/checkJwtToken");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/register", usersController.register);

router.post("/login", usersController.login);

router.get("/getLoggedInUser", checkJwtToken, usersController.getSession);

router.post("/getAllUsers", usersController.retrieveAllUsers);

router.get("/getUserByPseudo", usersController.retrieveUserByPseudo);

module.exports = router;
