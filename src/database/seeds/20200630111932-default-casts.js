'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'casts',
      [
        {
          identifier: 'cast_1',
          full_name: 'Cast 1',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          identifier: 'cast_2',
          full_name: 'Cast 2',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          identifier: 'cast_3',
          full_name: 'Cast 3',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          identifier: 'cast_4',
          full_name: 'Cast 4',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          identifier: 'cast_5',
          full_name: 'Cast 5',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('casts', null, {});
  },
};
