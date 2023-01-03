const express = require("express");
const userController = require("../controllers/results");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
});

module.exports = router;
