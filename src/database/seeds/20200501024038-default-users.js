'use strict';
const bcrypt = require('../../services/bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          uuid: uuidv4(),
          first_name: 'Admin',
          last_name: 'Account',
          username: 'admin',
          password: bcrypt().password('123456789'), // run every hooks
          email: 'admin@superflix.ph',
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
