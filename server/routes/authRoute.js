const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const UserController = require('./../controllers/userController.js')

router.post(
    '/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 20}),
    UserController.registration
);
router.post(
    '/login',
    UserController.login
)
router.get(
    '/activate/:link',
    UserController.activate
)

module.exports = router;