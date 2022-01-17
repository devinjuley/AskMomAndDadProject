'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }
    let answerArray = []
    for (let i = 0; i < 200; i++) {
      answerArray.push({
        content: faker.lorem.sentence(),
        questionId: getRandomInt(1, 15),
        userId: getRandomInt(1, 8),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Answers', answerArray, {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Answers', null, {});

  }
};
