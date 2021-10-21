'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Questions', [], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Questions', null, {});

  }
};
