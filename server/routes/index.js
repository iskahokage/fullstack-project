const express = require('express')
const router = express();

const authRoute = require('./authRoute.js');
const userRoute = require('./userRoute.js');
const profileRoute = require('./profileRoute.js');
const authMiddleware = require('../middlewares/authMiddleware.js');
module.exports = router;

router.use('/', authRoute)
router.use('/user', authMiddleware, userRoute)
router.use('/profile', profileRoute)

module.exports = router;