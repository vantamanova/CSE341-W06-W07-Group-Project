const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bio: String,
    firstAppearance: Date,
    games: [{ type: mongoose.Schema.Types.ObjectId, ref: "Game" }],
    abilities: [String],
    portraitUrl: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Character", characterSchema);
