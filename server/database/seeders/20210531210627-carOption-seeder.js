'use strict';
import _ from 'underscore';

const OPTIONS = [
  'Climate control, electronic',
  'Light & Sight package',
  'Manual height adjustment, front seats',
  'Winter package',
  'Convenience package',
  'Carpet mats',
  'Steering wheel - multifunction leather trimmed',
  'Cruise and Park Package',
  'Full size steel spare wheel 5J x 14"',
  'Rear side thoracic airbags',
  'Front and rear carpet mat set',
  '255/45 R20 all-season tires',
  'Exterior color options: Florett Silver metallic',
  'Bicycle holder',
  'Door sill trim, 2-piece set',
  'Door wind deflectors (3-door)',
  'Front - UTR (Universal Traffic Recorder)',
  'Front and Rear - UTR (Universal Traffic Recorder)',
  'Front mudflaps',
  'Front rubber floor mats - black',
  'Luggage compartment liner',
  'Luxury carpet mat set - 4 pieces',
  'Rear mudflaps',
  'Rear roof spoiler',
  'Rear rubber floor mats - black',
  'Roof bars',
  'Safety kit',
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const amount = 60;

    const carOptions = OPTIONS.map(option => {
      return {
        name: option,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    });

    await queryInterface.bulkInsert('carOptions', 
      carOptions, {}
    );
  },

  down: async (queryInterface, Sequelize) => {

  }
};
