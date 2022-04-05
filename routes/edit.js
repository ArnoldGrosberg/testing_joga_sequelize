const express = require('express');
const router = express.Router();
const editController = require('../controllers/edit');

router.get('/:id', editController.getEditbyId);

module.exports = router;