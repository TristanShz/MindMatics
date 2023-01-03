const express = require("express");
const resultController = require("../controllers/results");
const router = express.Router();


router.post('/get', resultController.getAll);
