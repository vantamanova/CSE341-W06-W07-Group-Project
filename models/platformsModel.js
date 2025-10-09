const mongoose = require("mongoose");

const platformSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    company: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: Number, // Store release year as a number (e.g., 2020)
    },
    type: {
      type: String,
      enum: ["console", "pc", "mobile"], // Adjusted to typical platform types
      required: true,
    },
    logoUrl: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Platform", platformSchema);
