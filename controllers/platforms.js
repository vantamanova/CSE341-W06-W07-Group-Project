// Controller for handling logic related to platform endpoints (CRUD operations, business rules).

const Platform = require("../models/platforms");
const asyncHandler = require("express-async-handler");

// GET /platforms
exports.getAllPlatforms = asyncHandler(async (req, res) => {
  const platforms = await Platform.find();
  res.json(platforms);
});

// GET /platforms/:id
exports.getPlatformById = asyncHandler(async (req, res) => {
  const platform = await Platform.findById(req.params.id);
  if (!platform) {
    return res.status(404).json({ message: "Platform not found" });
  }
  res.json(platform);
});

// POST /platforms
exports.createPlatform = asyncHandler(async (req, res) => {
  const { name, manufacturer, releaseYear } = req.body;
  const newPlatform = new Platform({ name, manufacturer, releaseYear });
  const savedPlatform = await newPlatform.save();
  res.status(201).json(savedPlatform);
});

// PUT /platforms/:id
exports.updatePlatform = asyncHandler(async (req, res) => {
  const { name, manufacturer, releaseYear } = req.body;
  const updatedPlatform = await Platform.findByIdAndUpdate(
    req.params.id,
    { name, manufacturer, releaseYear },
    { new: true }
  );
  if (!updatedPlatform) {
    return res.status(404).json({ message: "Platform not found" });
  }
  res.json(updatedPlatform);
});

// DELETE /platforms/:id
exports.deletePlatform = asyncHandler(async (req, res) => {
  const deletedPlatform = await Platform.findByIdAndDelete(req.params.id);
  if (!deletedPlatform) {
    return res.status(404).json({ message: "Platform not found" });
  }
  res.json({ message: "Platform deleted successfully" });
});
