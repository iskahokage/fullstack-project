const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware.js');
const UserController = require('./../controllers/userController.js')
const router = express.Router();

router.get('/', UserController.getAll)
router.get('/:id', UserController.getOne)
router.delete('/delete/:id', UserController.delete)

module.exports = router;