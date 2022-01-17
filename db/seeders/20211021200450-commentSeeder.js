'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }
    let commentArray = []
    for (let i = 0; i < 600; i++) {
      commentArray.push({
        content: faker.lorem.sentence(),
        answerId: getRandomInt(1, 201),
        userId: getRandomInt(1, 8),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    return queryInterface.bulkInsert('Comments', commentArray, {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Comments', null, {});

  }
};
