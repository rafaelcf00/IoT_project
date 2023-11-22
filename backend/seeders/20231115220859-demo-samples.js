'use strict';
const maxCount = 10000;
const temperatureMin = 24.00;
const temperatureMax = 31.00;
const phMin = 2.50;
const phMax = 3.60;
let samples = [];

for(let i = 1; i <= maxCount; i++) {
  let temperature = (Math.random() * (temperatureMax - temperatureMin) + temperatureMin).toFixed(2);
  const faixaPh = (phMax - phMin) * (temperature - temperatureMin) / (temperatureMax - temperatureMin);
  const ph = phMin + faixaPh;
  
  let dataObject = {
    id: i,
    temperature: temperature,
    ph: ph,
    name: `Amostra ${i}`,
    userId: 1,
    createdAt: `2023-${Math.floor(Math.random() * (12-1) + 1)}-${Math.floor(Math.random() * (29-1) + 1)}T21:00:00.704Z`,
    updatedAt: `2023-${Math.floor(Math.random() * (12-1) + 1)}-${Math.floor(Math.random() * (29-1) + 1)}T21:00:00.704Z`,
  }
  samples.push(dataObject);
} 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Samples', samples, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Samples', null, {});
  }
};
