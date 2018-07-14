const express = require('express');

const controller = require('../../controllers/articles/article');
const router = express.Router();
const passport = require('passport');

// localhost:3001/api/article/:id
router.get('/:slug', controller.getOneArticle);

// localhost:3001/api/article/create
router.post('/create', passport.authenticate('jwt', {session: false}), controller.create);

module.exports = router;