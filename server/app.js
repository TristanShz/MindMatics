const connect = require("./config/db.config");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/results");

//Connexion à la base de données
connect().catch((err) => console.log(err));

//Configuration de express
const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "*" }));

//Configuration des routes
app.use("/api", router);

module.exports = app;
