/*
Import packages
*/
const express = require('express');

/*
Import custom packages
*/
import { getData } from '../middleware';
const publicController = require('../controllers/publicController');

/*
Make a router
*/
const router = express.Router();

/*
Routes
*/
router.get('/', publicController.getHome);
router.get('/carsDataTest/:category', (req, res, next ) => {getData(req, res,next, '/cars')}, publicController.getCarsTest);

router.get('/cars', publicController.getCars);
router.get('/news', publicController.getNews);
router.get('/contact', publicController.getContact);
router.get('/about', publicController.getAbout);
router.get('/design-system', publicController.getDesignSystem);
router.get('/test', publicController.getTest);

router.get('/contact', publicController.getContact);
//router.get('/news', publicController.getNews);
//router.get('/about', publicController.getAbout);
module.exports = router;