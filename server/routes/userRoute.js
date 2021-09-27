const express = require('express');
const UserController = require('./../controllers/userController.js')
const router = express.Router();

router.get('/', UserController.getAll)

module.exports = router;