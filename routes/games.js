// Defines routes for game-related endpoints and maps them to controller functions.
const express = require('express');
const router = express.Router();
const { validateGame } = require('../middlewares/validateGame');
const gamesController = require('../controllers/games');
const { IsAuthenticated } = require('../middlewares/auth');

router.get('/',
  /* #swagger.tags = ['Games'] */
  gamesController.getAllGames
);

router.get('/:id',
  /* #swagger.tags = ['Games'] */
  gamesController.getGameById
);

router.post('/', IsAuthenticated,
  /*  
    #swagger.tags = ['Games']
    #swagger.description = 'Create a new game'
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Game information',
      required: true,
      schema: {
        title: 'Cyberpunk 2077',
        genre: 'RPG',
        releaseDate: '2020-12-10'
      }
    }
  */
  validateGame,
  gamesController.addGame
);

router.put('/:id', IsAuthenticated,
  /*  
    #swagger.tags = ['Games']
    #swagger.description = 'Update an existing game'
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Updated game information',
      required: true,
      schema: {
        title: 'Cyberpunk 2077',
        genre: 'Action RPG',
        releaseDate: '2020-12-10'
      }
    }
  */
  validateGame,
  gamesController.updateGame
);

router.delete('/:id', IsAuthenticated,
  /* #swagger.tags = ['Games'] */
  gamesController.deleteGame
);

module.exports = router;