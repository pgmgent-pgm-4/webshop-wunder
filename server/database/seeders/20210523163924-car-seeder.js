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

const returnLowChanceBoolean = () => {
  const number = Math.random();
  return number > .8 ? true :  false;
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
      var files = fs.readdirSync(path.join(__dirname,'../../static/images/cars/',brand.name));
      
      // each image is called "Brand__carName.png"
      const carNamesFromFileSystem =  files.map(file => {
        return {
          brand:file.split('__')[0].toLowerCase(), 
          name: file.split('__')[1].split('.png')[0],
          img: file
        }
      });

      const brandId = brandFromDatabase.find(b => b.name === brand.name).id;

      carNames.push({
        brandId: brandId,
        list: carNamesFromFileSystem
      })

    });

    const carList = [];

    const createCar = (brandId, name, img, brand) => {
      carList.push({
        name: name,
        teaserImgUrl: `/static/images/cars/${brand}/${img}`,
        ShapeId: _.sample(shapeIds).id,
        BrandId: brandId,
        price: (_.random(100, 1200)*100) + (returnLowChanceBoolean() ? +500 : +0),
        isAutomatic: returnBoolean(),
        fuelType: _.sample(FUELTYPES),
        engineCapacity: _.random(1, 19)*100,
        horsePower: _.random(5,40)*10,
        doors: _.sample([3,5]),
        seats: _.random(2, 9),
        gears: _.random(5,9),
        fuelConsumption: _.random(40,150)/10,
        topSpeed: _.random(16, 35)*10,
        acceleration: _.random(25,100)/10,
        breaktime: _.random(30,60)/10,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    carNames.forEach(carName => {
      carName.list.forEach(c => {
        createCar(carName.brandId, c.name, c.img, c.brand)
      });
    });

    await queryInterface.bulkInsert('cars', 
      carList, {}
    );
  },
  down: (queryInterface, Sequelize) => {

  }
};
