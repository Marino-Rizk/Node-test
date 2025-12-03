const express = require('express');
const userController = require('../controller/userController');
const validator = require('../validators/userValidator');

const router = express.Router();

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', validator.validateCreateUser, userController.createUser);
router.put('/users/:id', validator.validateUpdateUser, userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;