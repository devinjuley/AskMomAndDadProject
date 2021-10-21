'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Answers', [], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Answers', null, {});

  }
};
