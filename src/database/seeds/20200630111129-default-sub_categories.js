'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'sub_categories',
      [
        {
          identifier: 'action_adventure',
          title: 'Action & Adventures',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          identifier: 'action_thrillers',
          title: 'Action Thrillers',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sub_categories', null, {});
  },
};
