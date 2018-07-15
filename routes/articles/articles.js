const express = require('express');

const controller = require('../../controllers/articles/article');
const router = express.Router();
const passport = require('passport');
// localhost:3001/api/articles/:page
router.get('/:page', controller.getAllArticle);
router.post('/create', passport.authenticate('jwt', {session: false}), controller.create);
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove);
router.put('/:id', passport.authenticate('jwt', {session: false}), controller.update);

// to generate fake data
router.get('/generate-fake-data', controller.genFakerArticles);
module.exports = router;