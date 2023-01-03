const express = require("express");
const resultController = require("../controllers/results");
const router = express.Router();

const verifyJwtToken = require("../middlewares/checkJwtToken");

router.get("/", resultController.getAll);

router.post("/create", verifyJwtToken, resultController.create);


module.exports = router;
