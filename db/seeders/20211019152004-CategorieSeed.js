'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {category: 'Taxes', createdAt: new Date(), updatedAt: new Date()},
      {category: 'Laundry', createdAt: new Date(), updatedAt: new Date()},
      {category: 'Rent', createdAt: new Date(), updatedAt: new Date()},
      {category: 'Medication', createdAt: new Date(), updatedAt: new Date()},
      {category: 'Cooking', createdAt: new Date(), updatedAt: new Date()},
      {category: 'Cleaning', createdAt: new Date(), updatedAt: new Date()},
      {category: 'Repairs', createdAt: new Date(), updatedAt: new Date()},
      {category: 'Social advice', createdAt: new Date(), updatedAt: new Date()},
      {category: 'Relationship advice', createdAt: new Date(), updatedAt: new Date()},
      {category: 'Other', createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
