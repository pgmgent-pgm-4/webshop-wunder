'use strict';
import 'babel-polyfill';
import _  from 'underscore';

module.exports = {
  up: async(queryInterface, Sequelize) => {

    let cars = await queryInterface.sequelize.query(
      `SELECT id from Cars;`
    );
    cars = cars[0];

    let carColours = await queryInterface.sequelize.query(
      `SELECT id from CarColours;`
    );
    carColours = carColours[0];
    
    let car_has_colours = [];
    cars.forEach(car => {
      const amount = _.random(1,carColours.length);

      for (let i = 0; i < amount; i++) {
        const randomCarColour = _.sample(carColours).id;

        const exists = car_has_colours.find(c => ((c.CarId === car.id) && (c.CarColourId === randomCarColour)));
        
        if(!exists) {
          car_has_colours.push({
            CarId: car.id,
            CarColourId: randomCarColour,
            createdAt: new Date(),
            updatedAt: new Date(),
          })
        }
        
      }
    });

    await queryInterface.bulkInsert('Car_has_colours', 
    car_has_colours, {}
    );
  },
  down: (queryInterface, Sequelize) => {

  }
};
