const express = require('express');

const controller = require('../../controllers/categories/category');
const router = express.Router();
const passport = require('passport');

// localhost:3001/api/category/create
router.get('/', controller.getAllCategories);
router.post('/create', passport.authenticate('jwt', {session: false}), controller.create);
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove);
router.put('/:id', passport.authenticate('jwt', {session: false}), controller.update);
module.exports = router;