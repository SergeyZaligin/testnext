const express = require('express');

const controller = require('../../controllers/categories/category');
const router = express.Router();
const passport = require('passport');

// localhost:3001/api/category/create
router.post('/create', passport.authenticate('jwt', {session: false}), controller.create);

module.exports = router;