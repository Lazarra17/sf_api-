'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Categories',
      [
        {
          identifier: 'action',
          title: 'Action',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          identifier: 'fantasy',
          title: 'Fantasy',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          identifier: 'comedy',
          title: 'Comedy',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          identifier: 'anime',
          title: 'Anime',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  },
};
