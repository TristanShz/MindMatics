const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
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
