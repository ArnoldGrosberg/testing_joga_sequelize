const express = require('express');
const router = express.Router();
const apiArticleController = require('../controllers/api/article');
const apiAuthorController = require('../controllers/api/author');
const apiTagsController = require('../controllers/api/tags');

router.get('/article', apiArticleController.getArticleBySlug);
router.get('/author', apiAuthorController.getAuthorBySlug);
router.get('/tag', apiTagsController.getTagsBySlug);

module.exports = router;