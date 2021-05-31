'use strict';
import 'babel-polyfill';
import _  from 'underscore';

const randomNumber = (min, max) => {
  return Math.floor((Math.random() * max) + min);
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let cars = await queryInterface.sequelize.query(
      `SELECT id from Cars;`
    );
    cars = cars[0];

    let carOptions = await queryInterface.sequelize.query(
      `SELECT id from CarOptions;`
    );
    carOptions = carOptions[0];

    const car_has_options = [];

    cars.forEach(car => {
      const amountOfOption = randomNumber(0, carOptions.length);
    
      if (amountOfOption > 0) {
        for (let i = 0; i < amountOfOption; i++) {
          car_has_options.push({
            CarId: car.id,
            CarOptionId: _.sample(carOptions).id,
            price: randomNumber(1, 25)*50,
            createdAt: new Date(),
            updatedAt: new Date(),
          })
        }
      }
    });

    await queryInterface.bulkInsert('car_has_options', 
    car_has_options, {}
    );
  },

  down: async (queryInterface, Sequelize) => {

  }
};
