'use strict';
import 'babel-polyfill';
import _ from 'underscore';

const PAYMENTOPTIONS = [
  'visa',
  'mastercard',
  'american express',
  'bancontact',
  'wire transfer',
];

const STATUSSES = [
  'pending',
  'payed',
  'declined',
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let orders = await queryInterface.sequelize.query(
      `SELECT id from Orders;`
    );
    orders = orders[0]

    const payments = orders.map(order => {
      return {
        OrderId: order.id,
        paymentMethod: _.sample(PAYMENTOPTIONS),
        status: _.sample(STATUSSES),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    });

    await queryInterface.bulkInsert('payments', 
    payments, {}
    );
  },


  down: async (queryInterface, Sequelize) => {

  }
};
