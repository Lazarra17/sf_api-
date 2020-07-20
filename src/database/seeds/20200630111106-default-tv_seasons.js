'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'tv_seasons',
      [
        {
          identifier: 'season_1',
          title: 'S1',
          description: 'Season 1',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          identifier: 'season_2',
          title: 'S2',
          description: 'Season 2',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          identifier: 'season_3',
          title: 'S3',
          description: 'Season 3',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          identifier: 'season_4',
          title: 'S4',
          description: 'Season 4',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          identifier: 'season_5',
          title: 'S5',
          description: 'Season 5',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tv_seasons', null, {});
  },
};
