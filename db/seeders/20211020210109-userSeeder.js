'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      { username: 'devin', email: 'devinjuley@gmail.com', hashedPassword: 'something', createdAt: new Date(), updatedAt: new Date() }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  }
};
