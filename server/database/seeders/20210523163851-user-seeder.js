'use strict';

import faker from 'faker';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const amount = 150;

    const usersList = []
    for (let i = 0; i < amount; i++) {
      usersList.push({
        email: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    return queryInterface.bulkInsert('Users', 
    usersList, {}
    );
  },

  down: (queryInterface, Sequelize) => {

  }
};
