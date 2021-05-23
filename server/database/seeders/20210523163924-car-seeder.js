'use strict';
import 'babel-polyfill';
import _  from 'underscore';
import fs from 'fs';
import path from 'path';

const FUELTYPES = [
  'Gasoline',
  'Diesel',
  'Bio-diesel',
  'liquified Petroleum',
  'Compressed Natural Gas',
  'Ethanol',
  'Electric'
];

const randomNumber = (min, max) => {
  return Math.floor((Math.random() * max) + min);
}

const returnBoolean = () => {
  const number = Math.random();
  return number > .5 ? true :  false;
}

module.exports = {
  up: async(queryInterface, Sequelize) => {

    let shapeIds = await queryInterface.sequelize.query(
      `SELECT id from Shapes;`
    );
    shapeIds = shapeIds[0]

    let brandFromDatabase = await queryInterface.sequelize.query(
      `SELECT * from Brands;`
    );
    brandFromDatabase = brandFromDatabase[0];

    let carColourIds = await queryInterface.sequelize.query(
      `SELECT id from CarColours;`
    );
    carColourIds = carColourIds[0]

    let carNames = [];
    brandFromDatabase.forEach(brand => {
      var files = fs.readdirSync(path.join(__dirname,'../../data/files/cars',brand.name));
      
      // each image is called "Brand__carName.png"
      const carNamesFromFileSystem =  files.map(file => {
        return file.split('__')[1].split('.png')[0];
      });

      const brandId = brandFromDatabase.find(b => b.name === brand.name).id;

      carNames.push({
        brandId: brandId,
        list: carNamesFromFileSystem
      })

    });

    const carList = [];

    const createCar = (brandId, name) => {
      carList.push({
        name: name,
        ShapeId: _.sample(shapeIds).id,
        BrandId: brandId,
        CarColourId: _.sample(carColourIds).id,
        price: randomNumber(20000, 60000),
        isAutomatic: returnBoolean(),
        fuelType: _.sample(FUELTYPES),
        engineCapacity: randomNumber(1, 19)*100,
        horsePower: randomNumber(50,150),
        doors: _.sample([3,5]),
        seats: randomNumber(2, 9),
        gears: randomNumber(5,9),
        fuelConsumption: randomNumber(10,70)/10,
        topSpeed: randomNumber(100, 190),
        acceleration: randomNumber(10,50)/10,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    carNames.forEach(carName => {
      carName.list.forEach(c => {
        createCar(carName.brandId, c)
      });
    });

    await queryInterface.bulkInsert('Cars', 
    carList, {}
    );
  },
  down: (queryInterface, Sequelize) => {

  }
};
