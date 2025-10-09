// Defines routes for game-related endpoints and maps them to controller functions.
const {IsAuthenticated} = require("../middlewares/auth");

const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/games');
const {validateGame} = require('../middlewares/validateGame');

// GET all games
router.get('/', gamesController.getAllGames);

// GET a specific game by ID
router.get('/:id', gamesController.getGameById);

// POST a new game with validation middleware
router.post('/', IsAuthenticated, validateGame, gamesController.addGame);

// PUT to update an existing game with validation middleware
router.put('/:id', IsAuthenticated, validateGame, gamesController.updateGame);

// DELETE a game by ID
router.delete('/:id', IsAuthenticated,  gamesController.deleteGame);

module.exports = router;