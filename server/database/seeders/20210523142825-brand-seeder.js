'use strict';

const BRANDS = [
  'audi',
  'bmw',
  'ford',
  'lexus'
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

//console.dir(shapesList, {depth: null});


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Brands', 
    brandsList, {}
    );
  },

  down: (queryInterface, Sequelize) => {

  }
};
