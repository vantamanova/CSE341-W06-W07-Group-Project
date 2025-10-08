// Defines routes for user-related endpoints and maps them to controller functions.
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const { validateUser } = require('../middlewares/validateUser');

router.get('/', 
    /* #swagger.tags = ['Users'] */
    usersController.getAllUsers);

router.get('/:id', 
    /* #swagger.tags = ['Users'] */
    usersController.getUserById); 

router.get('/username/:username', 
    /* #swagger.tags = ['Users'] */
     usersController.getUserbyUsername);
//router.get('/loginUser', usersController.addUser);
//router.get('/logoutUser', usersController.addUser);

router.post('/', 
    /*  
    #swagger.tags = ['Users']
    #swagger.description = 'Create a new user'
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'User information',
      required: true,
      schema: {
        role: 'user',
        username: 'Amily',
        email: 'amily@gmail.com',
        favorites: ['Hades II', 'Cyberpunk 2077'],
        rank: 'Expert',
        date_of_registration: '2021-08-22T00:00:00.000Z',
        age: 29,
        membership: 'premium'
      }
    }
  */
    validateUser,
    usersController.addUser);

router.put('/:userId',
     /*  
    #swagger.tags = ['Users']
    #swagger.description = 'Create a new user'
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'User information',
      required: true,
      schema: {
        role: 'user',
        username: 'Amily',
        email: 'amily@gmail.com',
        favorites: ['Hades II', 'Cyberpunk 2077'],
        rank: 'Expert',
        date_of_registration: '2021-08-22T00:00:00.000Z',
        age: 29,
        membership: 'premium'
      }
    }
  */
    validateUser, 
    
    usersController.updateUser);
router.delete('/:userId',
    /* #swagger.tags = ['Users'] */
    usersController.deleteUser);

module.exports = router;
