'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sub_categories = sequelize.define(
    'Sub_categories',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      identifier: DataTypes.STRING,
      title: DataTypes.STRING,
    },
    {}
  );
  Sub_categories.associate = function (models) {
    // associations can be defined here
  };
  return Sub_categories;
};
