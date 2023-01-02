const mongoose = require("mongoose")

async function connect() {
  mongoose
    .connect(
      "mongodb+srv://mindmatics_user:fetl6HwD7aEVYbsH@cluster0.6jcpanv.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    )
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));
}

module.exports = connect;
