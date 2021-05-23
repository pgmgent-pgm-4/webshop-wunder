'use strict';

import faker from 'faker';

const usersList = []
for (let i = 0; i < 20; i++) {
  usersList.push({
    email: faker.internet.email(),
    password: faker.internet.password(),
    createdAt: new Date(),
    updatedAt: new Date(),
  })
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', 
    usersList, {}
    );
  },

  down: (queryInterface, Sequelize) => {

  }
};
