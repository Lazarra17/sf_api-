'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    'Categories',
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
  Categories.associate = function (models) {
    // associations can be defined here
  };
  return Categories;
};
