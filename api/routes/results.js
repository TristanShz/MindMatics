const express = require("express");
const ResultController = require("../controllers/results");
const router = express.Router();

const verifyJwtToken = require("../middlewares/checkJwtToken");

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.post("/create", verifyJwtToken, (req, res) => {
    res.send(ResultController.create);
});


module.exports = router;
