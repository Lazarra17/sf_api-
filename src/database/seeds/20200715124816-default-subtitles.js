'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'subtitles',
      [
        {
          identifier: 'english',
          title: 'English',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          identifier: 'japan',
          title: 'Japan',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          identifier: 'filipino',
          title: 'Filipino',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('subtitles', null, {});
  },
};
