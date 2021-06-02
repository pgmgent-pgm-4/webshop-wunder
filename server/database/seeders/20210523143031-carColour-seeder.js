'use strict';

const COLOURS = [
  {
    name: 'Metallic Black',
    hex: '0d1116',
  },
  {
    name: 'Metallic Silver',
    hex: '999da0',
  },
  {
    name: 'Metallic White',
    hex: 'fffff6',
  },
  {
    name: 'Metallic Blue',
    hex: '47578f',
  },
  {
    name: 'Metallic Purple',
    hex: '621276',
  },
  {
    name: 'Metallic Pink',
    hex: 'df5891',
  },
  {
    name: 'Metallic Red',
    hex: 'c00e1a',
  },
  {
    name: 'Metallic Orange',
    hex: 'f78616',
  },
  {
    name: 'Metallic Yellow',
    hex: 'ffcf20',
  },
  {
    name: 'Metallic Green',
    hex: '155c2d',
  }
];

const coloursList = COLOURS.map(colour => {
  return {
    name: colour.name,
    rgb: colour.hex,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CarColours', 
    coloursList, {}
    );
  },

  down: (queryInterface, Sequelize) => {

  }
};
