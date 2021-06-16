'use strict';
import _ from 'underscore';
import json from './reviews.json';
//TODO: move json to seeder-file

const CARNAMES = [
  "auto",
  "automobile",
  "bus",
  "convertible",
  "jeep",
  "limousine",
  "machine",
  "motor",
  "pickup",
  "ride",
  "station wagon",
  "truck",
  "van",
  "wagon"
];

const ADJECTIVES = [
  "practical",
  "incredible",
  "generic",
  "gorgeous",
  "unbranded",
  "small",
  "ergonomic",
  "awesome",
  "refined",
  "intelligent",
  "licensed",
  "fantastic",
  "handcrafted",
  "handmade",
  "rustic",
  "sleek" 
]

const PRENAMES = [
  "My",
  "My wife's",
  "My husband's",
  "My comany's",
  "My family's",
  "My friend's",
  "This",
  "The"
]

const randomRating = () => {
  return Math.floor((Math.random() * 5) + 0);
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const amount = 1200;

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
        description: `${_.sample(PRENAMES)} ${_.sample(CARNAMES)} is ${_.sample(ADJECTIVES)}, ${rating} stars!`,
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
