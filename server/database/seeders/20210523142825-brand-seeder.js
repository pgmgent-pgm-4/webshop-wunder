'use strict';

const BRANDS = [
  'Audi',
  'Bmw',
  'Ford',
  'Lexus'
];
// optional: look through existing file structure 

const brandsList = BRANDS.map(brand => {
  return {
    name: brand,
    url: '',
    imgUrl: '',
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
