/*
Import custom packages
*/
//const dataService = require('../services/dataService');
const { /* HTTPError, */handleHTTPError } = require('../utils');

/*
Get Home Render
*/
const getHome = (req, res, next) => {
  try {
    console.log('home');
    // Get data from service for teasers?
    //let posts = dataService.getPosts();
    //posts = posts.slice(0, 3);
    // Send response
    res.render('index', {
      //posts,
      dataTest: 'test'
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

const getCarsRender = (req, res, next) => {

  //console.log('test in render', res.locals.test);
  //console.log('locals', res.locals);
  try {
    console.log('render');
    res.render('cars', {
      dataTest: 'testextrarender'
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
}

const getCars = async(req, res, next) => {
  try {
    const category = (req.params.category === 'brands') || (req.params.category === 'shapes') ? req.params.category : null ;
    res.render('cars--data-test', {
      data: res.locals.data,
      category: category,
      //testData: res.locals.test
    });
    //next();
  } catch(error) {
    console.warn('An error occured!', error);
  }
}

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
    //const API = new EnjineApi;
    //console.log(test);
    // Get data from service for teasers?
    //let posts = dataService.getPosts();
    //posts = posts.slice(0, 3);
    // Send response
    //const dataTest = await API.getBrands();
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
  getContact,
  getTest,
  getCars,
  getCarsRender
};