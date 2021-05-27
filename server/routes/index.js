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
router.get('/cars', publicController.getCars);
router.get('/news', publicController.getNews);
router.get('/contact', publicController.getContact);
router.get('/about', publicController.getAbout);
router.get('/design-system', publicController.getDesignSystem);
router.get('/test', publicController.getTest);

module.exports = router;