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
router.get('/cars/:category', (req, res, next ) => {getData(req, res,next, '/cars')}, publicController.getCars);


router.get('/contact', publicController.getContact);
//router.get('/news', publicController.getNews);
//router.get('/about', publicController.getAbout);
module.exports = router;