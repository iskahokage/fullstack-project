const express = require('express');
const ProfileController = require('../controllers/profileController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', ProfileController.getAll)
router.patch('/update/:id', ProfileController.update);
router.get('/:id', ProfileController.getOne)
router.post('/', authMiddleware, ProfileController.create);

module.exports = router;
