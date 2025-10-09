// Controller for handling logic related to game endpoints (CRUD operations, business rules).
const Game = require("../models/games");
const asyncHandler = require("express-async-handler");

// GET /games
exports.getAllGames = asyncHandler(async (req, res) => {
  const games = await Game.find();
  res.json(games);
});

// GET /games/:id
exports.getGameById = asyncHandler(async (req, res) => {
  const game = await Game.findById(req.params.id);
  if (!game) {
    return res.status(404).json({ message: "Game not found" });
  }
  res.json(game);
});

// POST /games
exports.createGame = asyncHandler(async (req, res) => {
  const { title, genre, releaseDate } = req.body;
  const newGame = new Game({ title, genre, releaseDate });
  const savedGame = await newGame.save();
  res.status(201).json(savedGame);
});

// PUT /games/:id
exports.updateGame = asyncHandler(async (req, res) => {
  const { title, genre, releaseDate } = req.body;
  const updatedGame = await Game.findByIdAndUpdate(
    req.params.id,
    { title, genre, releaseDate },
    { new: true }
  );
  if (!updatedGame) {
    return res.status(404).json({ message: "Game not found" });
  }
  res.json(updatedGame);
});

// DELETE /games/:id
exports.deleteGame = asyncHandler(async (req, res) => {
  const deletedGame = await Game.findByIdAndDelete(req.params.id);
  if (!deletedGame) {
    return res.status(404).json({ message: "Game not found" });
  }
  res.json({ message: "Game deleted successfully" });
});