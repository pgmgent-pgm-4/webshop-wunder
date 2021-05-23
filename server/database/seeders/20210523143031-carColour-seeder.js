'use strict';

const COLOURS = [
  {
    name: 'red',
    rgb: 'FF0000',
  },
  {
    name: 'green',
    rgb: '00FF00',
  },
  {
    name: 'blue',
    rgb: '0000FF',
  },
  {
    name: 'white',
    rgb: 'FFFFFF',
  },
  {
    name: 'black',
    rgb: '000000',
  },
];

const coloursList = COLOURS.map(colour => {
  return {
    name: colour.name,
    rgb: colour.rgb,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('carColours', 
    coloursList, {}
    );
  },

  down: (queryInterface, Sequelize) => {

  }
};
