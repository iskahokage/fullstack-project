const express = require('express');
const ProfileController = require('../controllers/profileController');

const router = express.Router();

router.patch('/update/:id', ProfileController.update);
router.get('/:id', ProfileController.getOne)
router.post('/', ProfileController.create);

module.exports = router;
