const express = require('express');
const PostController = require('../controllers/postController.js');

const router = express.Router();

router.post('/', PostController.create)
router.get('/', PostController.getAll)
router.delete('/:id', PostController.delete)
module.exports = router;