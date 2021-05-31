'use strict';
import _ from 'underscore';
import json from './reviews.json';
//TODO: move json to seeder-file

const randomRating = () => {
  return Math.floor((Math.random() * 5) + 0);
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const amount = 50;

    let cars = await queryInterface.sequelize.query(
      `SELECT id from Cars;`
    );
    cars = cars[0];

    let users = await queryInterface.sequelize.query(
      `SELECT id from Users;`
    );
    users = users[0];

    const reviews = [];

    for (let i = 0; i < amount; i++) {
      const rating = randomRating();
      reviews.push({
        CarId: parseInt(_.sample(cars).id),
        UserId: parseInt(_.sample(users).id),
        description: `${_.sample(json.prenames)} ${_.sample(json.carnames)} is ${_.sample(json.adjectives)}, ${rating} stars!`,
        rating: rating,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert('carReviews', 
      reviews, {}
    );
  },

  down: async (queryInterface, Sequelize) => {

  }
};
