'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tv_seasons = sequelize.define(
    'Tv_seasons',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      identifier: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );
  Tv_seasons.associate = function (models) {
    // associations can be defined here
  };
  return Tv_seasons;
};
