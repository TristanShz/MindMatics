const mongoose = require("mongoose");

let MONGO_URI;

if (process.env.NODE_ENV === "test") {
  MONGO_URI =
    "mongodb+srv://mindmatics_user:fetl6HwD7aEVYbsH@cluster0.6jcpanv.mongodb.net/mindmatics_test?retryWrites=true&w=majority";
} else {
  MONGO_URI = process.env.MONGO_URI;
}
async function connect() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB !");
  } catch (err) {
    console.log("Failed to connect to MongoDB !", err);
    process.exit(1);
  }
}

module.exports = connect;
