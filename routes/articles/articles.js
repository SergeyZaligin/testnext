const express = require('express');

const controller = require('../../controllers/articles/article');
const router = express.Router();

// localhost:5000/api/article
router.get('/:page', controller.getAllArticle);

// localhost:5000/api/article/:id
router.get('/:id', controller.getOneArticle);


// to generate fake data
router.get('/generate-fake-data', controller.genFakerArticles);
module.exports = router;