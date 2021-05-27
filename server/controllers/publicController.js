/*
Import custom packages
*/
//const dataService = require('../services/dataService');
const { /* HTTPError, */handleHTTPError } = require('../utils');
import EnjineApi from '../services/dataService';




/*
Get Home Render
*/
const getHome = (req, res, next) => {
  try {
    // Get data from service for teasers?
    //let posts = dataService.getPosts();
    //posts = posts.slice(0, 3);
    // Send response
    res.render('index', {
      //posts,
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get Cat Render
*/
const getCars = (req, res, next) => {
  try {
    // Get data from service for teasers?
    //let posts = dataService.getPosts();
    //posts = posts.slice(0, 3);
    // Send response
    res.render('cars', {
      //posts,
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get News Render
*/
const getNews = (req, res, next) => {
  try {
    // Get data from service for teasers?
    //let posts = dataService.getPosts();
    //posts = posts.slice(0, 3);
    // Send response
    res.render('news', {
      //posts,
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get About Render
*/
const getAbout = (req, res, next) => {
  try {
    // Get data from service for teasers?
    //let posts = dataService.getPosts();
    //posts = posts.slice(0, 3);
    // Send response
    res.render('about', {
      //posts,
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get Design-system Render
*/
const getDesignSystem = (req, res, next) => {
  try {
    // Send response
    res.render('design-system', {
      //design-system,
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};


//! Below is test
/*
Get Contact Render
*/
const getContact = (req, res, next) => {
  try {
    // Get data from service for teasers?
    //let posts = dataService.getPosts();
    //posts = posts.slice(0, 3);
    // Send response
    res.render('contact', {
        name: 'This is our main office',
        address: '21 Baker Street'
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

//! Below is test
/*
Get Contact Render
*/
const getTest = async(req, res, next) => {
  
  try {
    
    //console.log(EnjineApi());
    const API = new EnjineApi;
    //console.log(test);
    // Get data from service for teasers?
    //let posts = dataService.getPosts();
    //posts = posts.slice(0, 3);
    // Send response
    const dataTest = await API.getBrands();
    console.log(dataTest);
    //console.log(dataTest);
    //console.log('test')
    res.render('test', {
      data: await dataTest 
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

module.exports = {
  getHome,
  getCars,
  getNews,
  getAbout,
  getDesignSystem,
  getContact,
  getTest,
};