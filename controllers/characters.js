// Controller for handling logic related to character endpoints (CRUD operations, business rules).
const Character = require("../models/character");
const asyncHandler = require("express-async-handler");

// GET /characters
exports.getAllCharacters = asyncHandler(async (req, res) => {
  const characters = await Character.find();
  res.json(characters);
});

// GET /characters/:id
exports.getCharacterById = asyncHandler(async (req, res) => {
  const character = await Character.findById(req.params.id);
  if (!character) {
    return res.status(404).json({ message: "Character not found" });
  }
  res.json(character);
});

// POST /characters
exports.createCharacter = asyncHandler(async (req, res) => {
  const { name, associated_games, role } = req.body;
  const newCharacter = new Character({ name, associated_games, role });
  const savedCharacter = await newCharacter.save();
  res.status(201).json(savedCharacter);
});

// PUT /characters/:id
exports.updateCharacter = asyncHandler(async (req, res) => {
  const { name, associated_games, role } = req.body;
  const updatedCharacter = await Character.findByIdAndUpdate(
    req.params.id,
    { name, associated_games, role },
    { new: true }
  );
  if (!updatedCharacter) {
    return res.status(404).json({ message: "Character not found" });
  }
  res.json(updatedCharacter);
});

// DELETE /characters/:id
exports.deleteCharacter = asyncHandler(async (req, res) => {
  const deletedCharacter = await Character.findByIdAndDelete(req.params.id);
  if (!deletedCharacter) {
    return res.status(404).json({ message: "Character not found" });
  }
  res.json({ message: "Character deleted successfully" });
});
