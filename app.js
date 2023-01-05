require("dotenv").config();
const connect = require("./api/_config/db.config");
const cors = require("cors");
const apiConfig = require("./api/_config/apiConfig");
const bodyParser = require("body-parser");
const router = require("./api/_config/router");
const path = require("path");

//Connexion à la base de données
connect().catch((err) => console.log(err));

//Configuration de express
const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "*" }));

app.use(express.static(path.join(__dirname, "client/build")));

//Configuration des routes
app.use(apiConfig.apiPath + "/results", router.results);
app.use(apiConfig.apiPath + "/users", router.users);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get(apiConfig.apiPath, (req, res) => {
  res.status(200).send("Hello World!");
});

module.exports = app;
