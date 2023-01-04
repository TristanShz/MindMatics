const mongoose = require("mongoose");
const { Schema } = mongoose;

const resultSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Result", resultSchema);
