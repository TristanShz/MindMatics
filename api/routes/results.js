const express = require("express");
const resultController = require("../controllers/results");
const router = express.Router();

router.get("/", (req, res) => {
    // appeler la fonction du controler pour recuperer tous les resultats
});

module.exports = router;
