'use strict';

const SHAPES = [
  'Berline',
  'Break',
  'Cabrio',
  'Coupé',
  'Hatchback',
  'MPV',
  'SUV'
];

const shapesList = SHAPES.map(shape => {
  return {
    name: shape,
    imgUrl: `${shape}.svg`,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shapes', 
      shapesList, {}
    );
  },
  down: (queryInterface, Sequelize) => {

  }
};
