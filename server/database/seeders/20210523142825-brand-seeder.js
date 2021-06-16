'use strict';

const BRANDS = [
  {
    name: 'Audi',
    url: 'https://www.nl.audi.be/be/web/nl.html',
    imgUrl: '/static/images/logo/audi.svg',
  },
  {
    name: 'Bmw',
    url: 'https://www.nl.audi.be/be/web/nl.html',
    imgUrl: '/static/images/logo/bmw.svg',
  },
  {
    name: 'Ford',
    url: 'https://www.nl.audi.be/be/web/nl.html',
    imgUrl: '/static/images/logo/ford.svg',
  },
  {
    name: 'Lexus',
    url: 'https://nl.lexus.be/?lexReferrer=https%3A%2F%2Fwww.google.com%2F',
    imgUrl: '/static/images/logo/lexus.svg',
  }
];

const brandsList = BRANDS.map(brand => {
  return {
    name: brand.name,
    url: brand.url,
    imgUrl: brand.imgUrl,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Brands', 
    brandsList, {}
    );
  },

  down: (queryInterface, Sequelize) => {

  }
};
