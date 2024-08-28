const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define the routes with the router
router.post('/users', userController.createUser);         // Create a new user
router.get('/users', userController.findAllUsers);        // Get all users
router.get('/users/:id', userController.findOneUser);     // Get a single user by ID
router.put('/users/:id', userController.updateUser);      // Update a user by ID
router.delete('/users/:id', userController.deleteUser);   // Delete a user by ID

// Export the router
module.exports = router;
