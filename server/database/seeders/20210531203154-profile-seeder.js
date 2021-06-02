'use strict';
import 'babel-polyfill';
import _  from 'underscore';
import faker from 'faker';

// Get date from past and substract 16 - 99 years from it.
const randomdob = () => {
  const age = Math.floor((Math.random() * 99) + 16);
  let date = faker.date.past();
  date.setFullYear( date.getFullYear() - age);
  return date;

}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const amount = 30;

    let users = await queryInterface.sequelize.query(
      `SELECT id from Users;`
    );
    users = users[0];
    
    const profiles = [];
    for (let i = 0; i < amount; i++) {
      profiles.push({
        UserId: _.sample(users).id,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        dob: randomdob(),
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert('profiles', 
      profiles, {}
    );
  },

  down: async (queryInterface, Sequelize) => {

  }
};
