/*
Import packages
*/
const express = require('express');

/*
Import custom packages
*/
const publicController = require('../controllers/publicController');

/*
Make a router
*/
const router = express.Router();

/*
Routes
*/
router.get('/', publicController.getHome);
router.get('/contact', publicController.getContact);
router.get('/test', publicController.getTest);

module.exports = router;