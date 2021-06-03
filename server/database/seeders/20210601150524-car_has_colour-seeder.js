'use strict';
import 'babel-polyfill';
import _  from 'underscore';

const randomNumber = (min, max) => {
  return Math.floor((Math.random() * max) + min);
}

const returnBoolean = () => {
  const number = Math.random();
  return number > .5 ? true :  false;
}

const returnLowChanceBoolean = () => {
  const number = Math.random();
  return number > .8 ? true :  false;
}

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
    //console.log(carColours);
    const maxAmountOfColours = carColours.length;
    //console.log(maxAmountOfColours);

    let car_has_colours = [];
   
    cars.forEach(car => {
      const amount = randomNumber(1,maxAmountOfColours);
      //console.log('randum number', amount);

      for (let i = 0; i < amount; i++) {
        
        const randomCarColour = _.sample(carColours).id;
        //console.log('random CarColour', randomCarColour);

        const exists = car_has_colours.find(c => ((c.CarId === car.id) && (c.CarColourId === randomCarColour)));
        //console.log('combinatie bestaat al?', exists);
        if(!exists) {
          //console.log('bestaat niet, dus pushen');
          car_has_colours.push({
            CarId: car.id,
            CarColourId: randomCarColour,
            createdAt: new Date(),
            updatedAt: new Date(),
          })
        }
        
      }
    });

    //console.log(car_has_colours[0]);
    //console.log(car_has_colours.length);

    await queryInterface.bulkInsert('Car_has_colours', 
    car_has_colours, {}
    );
  },
  down: (queryInterface, Sequelize) => {

  }
};
