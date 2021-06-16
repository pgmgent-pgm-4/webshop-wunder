'use strict';
import 'babel-polyfill';
import _ from 'underscore';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const amount = 60;

    let orders = await queryInterface.sequelize.query(
      `SELECT id from Orders;`
    );
    orders = orders[0]
    
    let cars = await queryInterface.sequelize.query(
      `SELECT id from Cars;`
    );
    cars = cars[0]
    
    let car_has_options = await queryInterface.sequelize.query(
      `SELECT * from Car_has_options;`
    );
    car_has_options = car_has_options[0]
    
    
    const createOrderItem = (orderId, itemType, itemId) => {
      orderItems.push({
        orderId: orderId,
        orderItemTableType: itemType,
        orderItemTableId: itemId,
        quantity: itemType !== 'car' ? 1 : _.random(1,5),
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }
    
    const orderItems = [];

    orders.forEach(order => {
      const amountOfOptions = _.random(0,5);
      createOrderItem( order.id, 'car', _.sample(cars).id );
      for (let i = 0; i < amountOfOptions; i++) {
        createOrderItem( order.id, 'car_has_option', _.sample(car_has_options).id );    
      }
    });

    await queryInterface.bulkInsert('orderitems', 
    orderItems, {}
    );

  },

  down: async (queryInterface, Sequelize) => {

  }
};
