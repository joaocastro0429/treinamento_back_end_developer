const express = require('express');
const router = express.Router();
const User = require('../model/UserModel');  // Correct import for the user model

const userController = require('../controllers/UserController')

// Route to get all users
router.get('/users', userController.getUsers);

router.get('/users/:id', userController.getUser);

router.post('/users', userController.createUser);

router.put('/users/:id', userController.updateUsers)

router.delete('/users/:id', userController.deleteUser)


module.exports = router;
