'use strict';
const Sequelize = require('sequelize');
const bcrypt = require('../../services/bcrypt');
const { v4: uuidv4 } = require('uuid');

const PROTECTED_ATTRIBUTES = ['password', 'id'];


const scopes = {
  findUserByEmailOrUsername(email, username) {
    return {
      where: {
        [Sequelize.Op.or]: [
          {
            email,
          },
          {
            username,
          },
        ],
      },
    };
  },
  findUserByUUID(uuid) {
    return {
      where: {
        uuid,
      },
    };
  },
};

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    uuid      : DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name : DataTypes.STRING,
    password  : DataTypes.STRING,
    email     : DataTypes.STRING,
    username  : DataTypes.STRING,
  }, 
  {
    underscored: true,
    scopes
  });
  User.associate = function(models) {
    models.User.hasOne(models.UserDetail, {
      as: 'details',
      foreignKey: 'user_id',
    }); 

    models.User.hasOne(models.UserUpload, {
      as: 'upload',
      foreignKey: 'user_id'
    }); 
  };

  User.beforeCreate(async (user, options) => {
    user.uuid = uuidv4();
    user.password = await bcrypt().password(user);
  });

  User.beforeSave(async (user, options) => {
    // user.password = await bcrypt().password(user);
  });

  User.prototype.toJSON = function () {

    // hide protected fields
    const attributes = Object.assign({}, this.get());
    PROTECTED_ATTRIBUTES.forEach((column) => {
      delete attributes[column];
    });
    return attributes;
  };

  return User;
};