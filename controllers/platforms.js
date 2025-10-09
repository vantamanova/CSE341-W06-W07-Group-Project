// Controller for handling logic related to platform endpoints (CRUD operations, business rules).
const Platform = require("../models/platformModel");
const asyncHandler = require("express-async-handler");

// @desc    Get all platforms
// @route   GET /api/platforms
// @access  Public
exports.getAllPlatforms = asyncHandler(async (req, res) => {
  const platforms = await Platform.find();
  res.json(platforms);
});

// @desc    Get a platform by ID
// @route   GET /api/platforms/:id
// @access  Public
exports.getPlatformById = asyncHandler(async (req, res) => {
  const platform = await Platform.findById(req.params.id);
  if (!platform) {
    res.status(404);
    throw new Error("Platform not found");
  }
  res.json(platform);
});

// @desc    Create a new platform
// @route   POST /api/platforms
// @access  Protected (implement auth later)
exports.createPlatform = asyncHandler(async (req, res) => {
  const { name, manufacturer, releaseYear, type, logoUrl } = req.body;

  if (!name) {
    res.status(400);
    throw new Error("Name is required");
  }

  const newPlatform = new Platform({
    name,
    manufacturer,
    releaseYear,
    type,
    logoUrl,
  });

  const createdPlatform = await newPlatform.save();
  res.status(201).json(createdPlatform);
});

// @desc    Update a platform
// @route   PUT /api/platforms/:id
// @access  Protected (implement auth later)
exports.updatePlatform = asyncHandler(async (req, res) => {
  const { name, manufacturer, releaseYear, type, logoUrl } = req.body;

  const platform = await Platform.findById(req.params.id);
  if (!platform) {
    res.status(404);
    throw new Error("Platform not found");
  }

  platform.name = name || platform.name;
  platform.manufacturer = manufacturer || platform.manufacturer;
  platform.releaseYear = releaseYear || platform.releaseYear;
  platform.type = type || platform.type;
  platform.logoUrl = logoUrl || platform.logoUrl;

  const updatedPlatform = await platform.save();
  res.json(updatedPlatform);
});

// @desc    Delete a platform
// @route   DELETE /api/platforms/:id
// @access  Protected (implement auth later)
exports.deletePlatform = asyncHandler(async (req, res) => {
  const platform = await Platform.findById(req.params.id);
  if (!platform) {
    res.status(404);
    throw new Error("Platform not found");
  }

  await platform.remove();
  res.json({ message: "Platform deleted successfully" });
});

// @desc    Get games on a platform by platform ID
// @route   GET /api/platforms/:id/games
// @access  Public
exports.getGamesOnPlatform = asyncHandler(async (req, res) => {
  const platformId = req.params.id;
  const platform = await Platform.findById(platformId);

  if (!platform) {
    res.status(404);
    throw new Error("Platform not found");
  }

  // Assuming you have a Game model and games reference by platform ObjectId
  const Game = require("../models/gameModel");
  const games = await Game.find({ platforms: platformId });

  res.json(games);
});
