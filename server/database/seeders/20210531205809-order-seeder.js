'use strict';
import 'babel-polyfill';
import faker from 'faker';
import _ from 'underscore';

const STATES = [
  'confirmed',
  'shipped',
  'on it\'s way',
  'delivered'
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const amount = 60;

    let users = await queryInterface.sequelize.query(
      `SELECT id from Users`
    );
    users = users[0];

    const orders = [];
    for (let i = 0; i < amount; i++) {
      orders.push({
        UserId: _.sample(users).id,
        orderDate: faker.date.past(),
        state: _.sample(STATES),
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert('orders', 
      orders, {}
    );
  },

  down: async (queryInterface, Sequelize) => {

  }
};
