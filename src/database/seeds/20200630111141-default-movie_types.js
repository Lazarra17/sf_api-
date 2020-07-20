'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'movie_types',
      [
        {
          identifier: 'movie',
          title: 'Movie',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          identifier: 'tv_shows',
          title: 'TV Shows',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
