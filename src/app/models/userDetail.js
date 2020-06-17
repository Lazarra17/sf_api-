'use strict';
const Sequelize = require('sequelize');

const scopes = {
  
};

module.exports = (sequelize, DataTypes) => {

  const UserDetails = sequelize.define('UserDetail', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    user_id: Sequelize.INTEGER,
    details: {
      type: Sequelize.STRING,
      get() {
        return JSON.parse(this.getDataValue('details'))
      },
    }
  }, 
  {
    underscored: true,
    scopes,
  });

  return UserDetails;
};