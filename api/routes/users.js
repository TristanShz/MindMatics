const express = require("express");
const userController = require("../controllers/users");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post('/register', userController.register);

router.get('/login', userController.login);

router.post('/getAllUsers', userController.retrieveAll);

router.get('/getUserByPseudo', userController.retrieveByPseudo);


module.exports = router;
