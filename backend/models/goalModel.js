const mongoose = require("mongoose");
const goalSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("goals", goalSchema);
