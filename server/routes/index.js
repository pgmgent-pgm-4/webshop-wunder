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
router.get('/', (req, res, next ) => {  
  getData(req, res, next, [{
      'apiUrl': '/brands',
      'dataLocation': 'brands'
  }, {
      'apiUrl': '/shapes',
      'dataLocation': 'shapes'
  }, {
      'apiUrl': '/cars',
      'dataLocation': 'teasers'
  }
])}, publicController.getHome);


router.get('/cars', (req, res, next ) => { 
  getData(req, res, next, [{
    'apiUrl': '/brands', 
    'dataLocation': 'brands'
    }, {
      'apiUrl': '/cars', 
      'dataLocation': 'cars'
    }
  ]) }, publicController.getCars);

router.get('/cars/bodywork/:category', (req, res, next ) => {
  getData(req, res, next, [{
    'apiUrl': '/shapes',
    'dataLocation': 'shapes'
  }, {
    'apiUrl': '/brands',
    'dataLocation': 'brands'
  }, {
    'apiUrl': '/cars/shapes',
    'dataLocation': 'cars'
  }
])
}, publicController.getCarsBodywork);

router.get('/cars/brands/:category', (req, res, next ) => {
  getData(req, res, next, [{
    'apiUrl': '/shapes',
    'dataLocation': 'shapes'
  }, {
    'apiUrl': '/brands',
    'dataLocation': 'brands'
  }, {
    'apiUrl': '/cars/brands',
    'dataLocation': 'cars'
  }
])

}, publicController.getCarsBrands);
router.get('/cars/detail/:id', publicController.getCarDetail);
router.get('/news', (req, res, next ) => { getData(req, res, next, [{'apiUrl': '/brands', 'dataLocation': 'brands'}]) }, publicController.getNews);
router.get('/contact', (req, res, next ) => { getData(req, res, next, [{'apiUrl': '/brands', 'dataLocation': 'brands'}]) }, publicController.getContact);
router.get('/about', (req, res, next ) => { getData(req, res, next, [{'apiUrl': '/brands', 'dataLocation': 'brands'}]) }, publicController.getAbout);
router.get('/profile-test', (req, res, next ) => { getData(req, res, next, [{'apiUrl': '/brands', 'dataLocation': 'brands'}]) }, publicController.profileTest);
router.get('/thank-you-test', (req, res, next ) => { getData(req, res, next, [{'apiUrl': '/brands', 'dataLocation': 'brands'}]) }, publicController.thankYouTest);
router.get('/design-system', (req, res, next ) => { getData(req, res, next, [{'apiUrl': '/brands', 'dataLocation': 'brands'}]) }, publicController.getDesignSystem);

module.exports = router;