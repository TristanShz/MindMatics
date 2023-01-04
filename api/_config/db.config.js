const mongoose = require("mongoose");
const apiConfig = require("./apiConfig");

async function connect() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
      `mongodb+srv://${apiConfig.mongo.user}:${apiConfig.mongo.pass}@cluster0.6jcpanv.mongodb.net/?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Successfully connected to MongoDB !");
  } catch (err) {
    console.log("Failed to connect to MongoDB !", err);
    process.exit(1);
  }
}

module.exports = connect;
