const express = require('express');

const controller = require('../../controllers/agencys/agency');
const router = express.Router();
//const passport = require('passport');

// localhost:3001/api/category/create
//router.get('/', controller.getAllAgency);
router.post('/create', controller.create);
//router.delete('/:id', controller.remove);
//router.put('/:id', controller.update);
module.exports = router;