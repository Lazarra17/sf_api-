'use strict';
const Sequelize = require('sequelize');

const scopes = {
  
};

module.exports = (sequelize, DataTypes) => {

  const UserDetails = sequelize.define('UserUpload', {
    user_id: DataTypes.INTEGER,
    name   : DataTypes.STRING,
    size   : DataTypes.STRING,
    type   : DataTypes.STRING,
    path: {
      type: Sequelize.STRING,
      get() {
        const assetUrl = process.env.ASSETS_URL + '/'
        return assetUrl + this.getDataValue('path');
      },
    },
  }, 
  {
    underscored: true,
    scopes
  });

  return UserDetails;
};