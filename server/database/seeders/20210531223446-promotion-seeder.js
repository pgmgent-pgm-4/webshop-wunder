'use strict';
import _  from 'underscore';

const TAGS = [
  'summer',
  'winter',
  'spring',
  'autumn',
  'crazy',
]

const returnBoolean = () => {
  const number = Math.random();
  return number > .5 ? true :  false;
}

const randomdate = () => {
  const randomMonths = Math.floor((Math.random() * -12) + 12);
  let date = new Date();
  date.setMonth( date.getMonth() + randomMonths );
  return date;

}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let cars = await queryInterface.sequelize.query(
      `SELECT id from Cars;`
    );
    cars = cars[0]

    const promotions = [];

    TAGS.forEach(tag => {

      const discount = _.random(1,9)*10;
      const promotionName = `${tag.toUpperCase()}-SALES`;
      const promotionCode = `${tag.toUpperCase()}${discount}`;
      
      cars.forEach(car => {
          if(returnBoolean()) {
            promotions.push({
              CarId: car.id,
              promotionName: promotionName,
              promotionCode: promotionCode,
              discount: discount,
              endDate: randomdate(),
              createdAt: new Date(),
              updatedAt: new Date(),
            })
          }
      });
    });

    await queryInterface.bulkInsert('promotions', 
    promotions, {}
    );

  },

  down: async (queryInterface, Sequelize) => {

  }
};
