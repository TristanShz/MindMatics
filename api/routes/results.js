const express = require("express");
const resultController = require("../controllers/results");
const router = express.Router();
const checkJwtToken = require("../middlewares/checkJwtToken");

router.get("/", resultController.getAll);

router.post("/remove", resultController.remove);

router.post("/create", checkJwtToken, resultController.create);

module.exports = router;
