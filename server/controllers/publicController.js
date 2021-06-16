import _ from 'underscore';

/*
Import custom packages
*/
const { handleHTTPError } = require('../utils');

// Import local data
import newsData from '../views/_data/news.json';
import serviceData from '../views/_data/services.json';
import officeData from '../views/_data/offices.json';
import teamData from '../views/_data/team.json';

/*
Get Home Render
*/
const getHome = (req, res, next) => {
  try {
    res.render('index', {
      bodywork: res.locals.data.shapes,
      brands: res.locals.data.brands,
      news: newsData,
      services: serviceData,
      teasers: _.sample(res.locals.data.teasers, 2),
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
    res.render('cars', {
      brands: res.locals.data.brands,
      data: res.locals.data.cars
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
  } catch(error) {
    console.warn('An error occured!', error);
  }
}


/*
Get Car Detail Render
*/
const getCarDetail = (req, res, next) => {
  try {
    const reviewsWithReadableDate =  res.locals.data.carReviews.map(carReview => {
      const d = new Date(carReview.createdAt);
      return {
        description: carReview.description,
        rating: carReview.rating,
        createdAt: d.toDateString(),
        CarId: carReview.CarId,
        UserId: carReview.UserId
      }
    });

    res.render('detail', {
      brands: res.locals.data.brands,
      car: res.locals.data.car,
      brands: res.locals.data.brands,
      carReviews: reviewsWithReadableDate
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
    res.render('news', {
      brands: res.locals.data.brands,
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
    res.render('design-system', {
      brands: res.locals.data.brands,
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
    res.render('contact', {
      brands: res.locals.data.brands,
      offices: officeData,
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};


/*
Get Profile Render
*/
const getProfileOverview = (req, res, next) => {
  try {
    res.render('profile', {
      brands: res.locals.data.brands,
      profile: res.locals.data.profile
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};


/*
Get Orders Render
*/
const getOrders = (req, res, next) => {
  try {
    res.render('orders', {
      brands: res.locals.data.brands,
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get Personal settings Render
*/
const getPersonalSettings = (req, res, next) => {
  try {
    res.render('settings', {
      brands: res.locals.data.brands,
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get Preferences Render
*/
const getPreferences = (req, res, next) => {
  try {
    res.render('preferences', {
      brands: res.locals.data.brands,
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get Wishlist Render
*/
const getWishlist = (req, res, next) => {
  try {
    res.render('wishlist', {
      brands: res.locals.data.brands,
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};


/*
Get Shopping basket Render
*/
const getShoppingBasket = (req, res, next) => {
  try {
    res.render('shopping-basket', {
      brands: res.locals.data.brands,
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
Login
*/
const login = async(req, res, next) => {
  try {
    res.render('login', {
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
  thankYouTest,
  getProfileOverview,
  getOrders,
  getPersonalSettings,
  getPreferences,
  getWishlist,
  getShoppingBasket,
  login
};