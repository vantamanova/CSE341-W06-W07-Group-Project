// Defines routes for game-related endpoints and maps them to controller functions.
const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/gamesController');
const {validateGame} = require('../middlewares/validateGame');

// GET all games
router.get('/', gamesController.getAllGames);
// GET a specific game by ID
router.get('/:id', gamesController.getGameById);
// POST a new game with validation middleware
router.post('/', validateGame, gamesController.addGame);
// PUT to update an existing game with validation middleware
router.put('/:id', validateGame, gamesController.updateGame);
// DELETE a game by ID
router.delete('/:id', gamesController.deleteGame);

module.exports = router;

// END of the Code here //