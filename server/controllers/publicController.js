import _ from 'underscore';

/*
Import custom packages
*/
//const dataService = require('../services/dataService');
const { /* HTTPError, */handleHTTPError } = require('../utils');
// import EnjineApi from '../services/dataService';

// Import local data
//import bodyworkData from '../views/_data/bodywork.json';
import newsData from '../views/_data/news.json';
import serviceData from '../views/_data/services.json';
//import brandData from '../views/_data/brands.json';
import officeData from '../views/_data/offices.json';
import teamData from '../views/_data/team.json';

import faker from 'faker';


/*
Get Home Render
*/
const getHome = (req, res, next) => {
  try {

    // Send response    
    res.render('index', {
      //bodywork: bodyworkData,
      bodywork: res.locals.data.shapes,
      brands: res.locals.data.brands,
      news: newsData,
      services: serviceData,
      teasers: _.sample(res.locals.data.teasers, 2),
      //brands: brandData,
      //shapeTest: res.locals.data['shapeTest']
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get Cars Render
*/
const getCars = (req, res, next) => {
  try {
    // Get data from service for teasers?
    //let posts = dataService.getPosts();
    //posts = posts.slice(0, 3);
    // Send response
    res.render('cars', {
      brands: res.locals.data.brands,
      data: res.locals.data.cars
      //posts,
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get Car Brands Render-test
*/
const getCarsBrands = async(req, res, next) => {
  try {
    // console.log(res.locals.data.length)
    const data = res.locals.data.cars;
    let count = 0;
    data.map(car => {
      car.Cars.forEach(add => {
        return count++
      });
    })
    
    res.render('cars', {
      data: res.locals.data.cars,
      category: req.params.category,
      filter: "brands",
      count: count,
      shapes: res.locals.data.shapes,
      brands: res.locals.data.brands,
    });
    //next();
  } catch(error) {
    console.warn('An error occured!', error);
  }
}

/*
Get Car Bodywork Render-test
*/
const getCarsBodywork = async(req, res, next) => {
  try {
    const data = res.locals.data.cars;
    let count = 0;
    data.map(car => {
      car.Cars.forEach(add => {
        return count++
      });
    })
    
    res.render('cars', {
      data: res.locals.data.cars,
      category: req.params.category,
      filter: "bodywork",
      count: count,
      shapes: res.locals.data.shapes,
      brands: res.locals.data.brands,
    });
    //next();
  } catch(error) {
    console.warn('An error occured!', error);
  }
}

/*
Get Car Detail Render
*/
const getCarDetail = (req, res, next) => {
  try {
    // Get data from service for teasers?
    //let posts = dataService.getPosts();
    //posts = posts.slice(0, 3);
    // Send response
    res.render('detail', {
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
      brands: res.locals.data.brands,
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
      brands: res.locals.data.brands,
      team: teamData,
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
}




/*
Get Design-system Render
*/
const getDesignSystem = (req, res, next) => {
  try {
    // Send response
    res.render('design-system', {
      brands: res.locals.data.brands,
      //design-system,
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

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
      brands: res.locals.data.brands,
      offices: officeData,
        // name: 'This is our main office',
        // address: '21 Baker Street'
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};



/*
Get Contact Render
*/
const profileTest = async(req, res, next) => {
  
  try {
    
    res.render('profile-test', {
      brands: res.locals.data.brands,
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get Contact Render
*/
const thankYouTest = async(req, res, next) => {
  console.log('test thank you')
  try {
    
    res.render('thank-you-test', {
      brands: res.locals.data.brands,
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
  getCars,
  getCarsBrands,
  getCarsBodywork,
  getCarDetail,  
  profileTest,
  thankYouTest
};