// Controller for handling logic related to platform endpoints (CRUD operations, business rules).
const Platform = require("../models/platformsModel");
const asyncHandler = require("express-async-handler");

exports.getAllPlatforms = asyncHandler(async (req, res) => {
  const platforms = await Platform.find();
  res.json(platforms);
});


exports.getPlatformById = asyncHandler(async (req, res) => {
  const platform = await Platform.findById(req.params.id);
  if (!platform) {
    res.status(404);
    throw new Error("Platform not found");
  }
  res.json(platform);
});


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


exports.deletePlatform = asyncHandler(async (req, res) => {
  const platform = await Platform.findById(req.params.id);
  if (!platform) {
    res.status(404);
    throw new Error("Platform not found");
  }

  await platform.remove();
  res.json({ message: "Platform deleted successfully" });
});


exports.getGamesOnPlatform = asyncHandler(async (req, res) => {
  const platformId = req.params.id;
  const platform = await Platform.findById(platformId);

  if (!platform) {
    res.status(404);
    throw new Error("Platform not found");
  }

  const Game = require("../models/gameModel");
  const games = await Game.find({ platforms: platformId });

  res.json(games);
});