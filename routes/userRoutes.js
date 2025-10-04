// Defines routes for user-related endpoints and maps them to controller functions.
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const { validateUser } = require('../middlewares/validateUser');

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.get('/username/:username', usersController.getUserbyUsername);
//router.get('/loginUser', usersController.addUser);
//router.get('/logoutUser', usersController.addUser);

router.post('/', validateUser, usersController.addUser);

router.put('/:userId', validateUser, usersController.updateUser);

router.delete('/:userId', usersController.deleteUser);

module.exports = router;

// END -- // 