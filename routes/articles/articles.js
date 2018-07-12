const express = require('express');
const controller = require('../../controllers/articles/article');
const router = express.Router();

// localhost:5000/api/article
router.get('/', controller.getAllArticle);

module.exports = router;