const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  pseudo: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 20,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 20,
    select: false,
  },
});

module.exports = mongoose.model("User", userSchema);
