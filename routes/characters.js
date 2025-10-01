// Defines routes for character-related endpoints and maps them to controller functions.
const express = require("express");
const router = express.Router();
const {
  getAllCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} = require("../controllers/characters");

// GET all characters
router.get("/", getAllCharacters);

// GET a character by ID
router.get("/:id", getCharacterById);

// POST a new character
router.post("/", createCharacter);

// PUT update a character
router.put("/:id", updateCharacter);

// DELETE a character
router.delete("/:id", deleteCharacter);

module.exports = router;
