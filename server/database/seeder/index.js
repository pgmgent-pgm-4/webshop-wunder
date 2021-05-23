import 'babel-polyfill';
/**
 * Import packages
 */
//const fs = require('fs');
//const path = require('path');
//const fetch = require('isomorphic-fetch');
//const faker = require('faker');
//const { v4: uuidv4 } = require('uuid');


//import * as brandController from '../../api/controllers/brand.controller';
/*
Variables
*/
const RANDOM_USER_ME_API = 'https://randomuser.me/api/?results=';
const BRANDS = [
  'audi',
  'bmw',
  'ford',
  'lexus'
];
const SHAPES = [
  'Berline',
  'Break',
  'Cabrio',
  'Coupé',
  'Hatchback',
  'MPV',
  'SUV'
];

/*
File paths
*/
//! Connection to database?
// const filePathCategories = path.join(__dirname, '..', 'data', 'categories.json');
// const filePathCommunities = path.join(__dirname, '..', 'data', 'communities.json');
// const filePathPosts = path.join(__dirname, '..', 'data', 'posts.json');
// const filePathUsers = path.join(__dirname, '..', 'data', 'users.json');
// const filePathCommunitiesMembers = path.join(__dirname, '..', 'data', 'communities_members.json');

// const createShapes = async () => {
//     await queryInterface.bulkInsert(
//       database.Brand.tablename,
//       [
//         BRANDS.forEach(brand => {
//           return {
//             name: brand,
//             imgUrl: `${brand}.svg`
//           }
//         })
//       ],
//       {}
//     );
// }

// const seed = async () => {
//   const shapes = await createShapes();
//   console.log('seed done');
//   console.log(shapes);
// }
//seed();

//const { Sequelize, Model, DataTypes } = require("sequelize");
//const sequelize = new Sequelize("sqlite::memory:");

//import Brand from '../../models/brand.model.js';
//console.log(Brand);
//const { Sequelize, Model, DataTypes } = require("sequelize");
//const sequelize = new Sequelize("sqlite::memory:");
// create an instance
//import {Brand} from '../../models/brand.model';
//console.log(Brand);
//const newBrand = Brand.build({name: 'audi'});
// console.log(newBrand instanceof Brand);
// console.log(newBrand.name);


// import brand from '../../models/brand.model';

// console.log(brand);

// brand.bulkCreate([
//   {
//     name: 'audi'
//   }
// ]).then(() => {
//   return brand.findAll()
// }).then((brands) => {
//   console.log(brands)
// })

//const models = require("../../models");
//import models from '../../models';

//console.log(models);

// console.log('test');

// // First, we start a transaction and save it into a variable
// import database from '../../database';
// import sequelize from 'Sequelize';
// const getData = async () => {
//   const t = await sequelize.transaction();
//   console.log(t)
// }

// try {

//   // Then, we do some calls passing this transaction as an option:

//   const user = await database.User.create({
//     email: 'test4@enjine.be',
//     lastName: 'password124'
//   }, { transaction: t });

//   await user.addSibling({
//     email: 'test5@enjine.be',
//     lastName: 'password125'
//   }, { transaction: t });

//   // If the execution reaches this line, no errors were thrown.
//   // We commit the transaction.
//   await t.commit();

// } catch (error) {

//   // If the execution reaches this line, an error was thrown.
//   // We rollback the transaction.
//   await t.rollback();

// }

// getData();

