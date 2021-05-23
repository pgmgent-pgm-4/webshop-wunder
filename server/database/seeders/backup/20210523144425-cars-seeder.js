'use strict';
import faker from 'faker';
const SHAPES = [
  'Berline',
  'Break',
  'Cabrio',
  'Coupé',
  'Hatchback',
  'MPV',
  'SUV'
];

const BRANDS = [
  'audi',
  'bmw',
  'ford',
  'lexus'
];

const COLOURS = [
  {
    name: 'red',
    rgb: 'FF0000',
  },
  {
    name: 'green',
    rgb: '00FF00',
  },
  {
    name: 'blue',
    rgb: '0000FF',
  },
  {
    name: 'white',
    rgb: 'FFFFFF',
  },
  {
    name: 'black',
    rgb: '000000',
  },
];


const shapesList = SHAPES.map(shape => {
  return {
    name: shape,
    imgUrl: `${shape}.svg`,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
});

const brandsList = BRANDS.map(brand => {
  return {
    name: brand,
    url: '',
    imgUrl: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
});

const coloursList = COLOURS.map(colour => {
  return {
    name: colour.name,
    rgb: colour.rgb,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
});

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
    console.log('shapes');
    return queryInterface.bulkInsert('Shapes', 
      shapesList
    );
  }
}, {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Brands', 
    brandsList
    );
  },
}, {
  up: (queryInterface, Sequelize) => {
    console.log('carColours');
    return queryInterface.bulkInsert('carColours', 
    coloursList
    );
  },
}, {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', 
    usersList
    );
  }
}
