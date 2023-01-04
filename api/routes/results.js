const express = require("express");
const resultController = require("../controllers/results");
const router = express.Router();

router.get("/", resultController.getAll);

router.post("/create", resultController.create);

router.post("/remove", resultController.remove);

module.exports = router;
