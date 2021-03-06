const express = require('express');

const controller = require('../../controllers/agencys/agency');
const router = express.Router();
const passport = require('passport');

// localhost:3001/api/category/create
//router.get('/:id', controller.getAllAgencysByDistrictId);
router.post('/create', passport.authenticate('jwt', {session: false}), controller.create);
router.post('/create/:id', passport.authenticate('jwt', {session: false}), controller.createReview);
router.get('/district/:slug', controller.getAllAgencysByDistrictId);
//router.delete('/:id', controller.remove);
//router.put('/:id', controller.update);
module.exports = router;