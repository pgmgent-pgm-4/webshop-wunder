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
])}, publicController.getCarsBrands);

router.get('/cars/detail/:id', (req, res, next ) => {
  getData(req, res, next, [{
    'apiUrl': '/cars',
    'dataLocation': 'car'
  }, {
    'apiUrl': '/brands',
    'dataLocation': 'brands'
  }, {
    'apiUrl': '/brands',
    'dataLocation': 'brands'
  }, {
    'apiUrl': `/cars/${req.params.id}/carreviews`,
    'dataLocation': 'carReviews'
  }
])}, publicController.getCarDetail);

router.get('/cars/detail/:id', (req, res, next ) => { getData(req, res, next, [{'apiUrl': '/brands', 'dataLocation': 'brands'}]) }, publicController.getCarDetail);

router.get('/profile', (req, res, next ) => { 
  getData(req, res, next, [{
    'apiUrl': '/brands', 
    'dataLocation': 'brands'
  }, {
    'apiUrl': `/users/${req.params.id}/profile`,
    'dataLocation': 'profile'
  }

]) }, publicController.getProfileOverview);
router.get('/profile/orders', (req, res, next ) => { 
  getData(req, res, next, [{
    'apiUrl': '/brands', 
    'dataLocation': 'brands' }]) } , publicController.getOrders);
router.get('/profile/personal-settings', (req, res, next ) => { getData(req, res, next, [{'apiUrl': '/brands', 'dataLocation': 'brands'}]) }, publicController.getPersonalSettings);
router.get('/profile/preferences', (req, res, next ) => { getData(req, res, next, [{'apiUrl': '/brands', 'dataLocation': 'brands'}]) }, publicController.getPreferences);
router.get('/profile/wishlist', (req, res, next ) => { getData(req, res, next, [{'apiUrl': '/brands', 'dataLocation': 'brands'}]) }, publicController.getWishlist);
router.get('/profile/shopping-basket', (req, res, next ) => { getData(req, res, next, [{'apiUrl': '/brands', 'dataLocation': 'brands'}]) }, publicController.getShoppingBasket);

router.get('/news', (req, res, next ) => { getData(req, res, next, [{'apiUrl': '/brands', 'dataLocation': 'brands'}]) }, publicController.getNews);
router.get('/contact', (req, res, next ) => { getData(req, res, next, [{'apiUrl': '/brands', 'dataLocation': 'brands'}]) }, publicController.getContact);
router.get('/about', (req, res, next ) => { getData(req, res, next, [{'apiUrl': '/brands', 'dataLocation': 'brands'}]) }, publicController.getAbout);
router.get('/profile-test', (req, res, next ) => { getData(req, res, next, [{'apiUrl': '/brands', 'dataLocation': 'brands'}]) }, publicController.profileTest);
router.get('/thank-you-test', (req, res, next ) => { getData(req, res, next, [{'apiUrl': '/brands', 'dataLocation': 'brands'}]) }, publicController.thankYouTest);
router.get('/design-system', (req, res, next ) => { getData(req, res, next, [{'apiUrl': '/brands', 'dataLocation': 'brands'}]) }, publicController.getDesignSystem);




//login
router.get('/login',  publicController.login);

module.exports = router;