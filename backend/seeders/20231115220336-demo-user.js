'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id: 1,
      name: 'Admin',
      email: 'admin@gmail.com',
      password: 'admin123',
      createdAt: '2023-11-11T21:15:34.704Z',
      updatedAt: '2023-11-11T21:15:34.704Z'
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
