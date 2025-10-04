// Defines routes for character-related endpoints and maps them to controller functions.
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/characters');
const { validateUser } = require('../middlewares/validateCharacter');
const charactersController = require('../controllers/characters');

router.get('/', 
    /* #swagger.tags = ['Characters'] */
    charactersController.getAllCharacters);

router.get('/:id', 
    /* #swagger.tags = ['Characters'] */
    charactersController.getCharacterById); 

router.post('/', (req, res) => {
   /*  
    #swagger.tags = ['Characters']
    #swagger.description = 'Create a new character'
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Character information',
      required: true,
      schema: {
        name: 'character',
        associated_games: ['Hades II', 'Cyberpunk 2077'],
        role: 'Supporting'
      }
    }
  */
  charactersController.createCharacter(req, res);
});


router.put('/:id', (req, res) => {
  /*  
    #swagger.tags = ['Characters']
    #swagger.description = 'Update an existing character'
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Updated character information',
      required: true,
      schema: {
        name: 'character',
        associated_games: ['Hades II', 'Cyberpunk 2077'],
        role: 'Protagonist'
      }
    }
  */
  charactersController.updateCharacter(req, res);
});


router.delete('/:id', (req, res) => {
    /* #swagger.tags = ['Characters'] */
    charactersController.deleteCharacter(req, res);
});

module.exports = router;
