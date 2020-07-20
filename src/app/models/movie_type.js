'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie_type = sequelize.define(
    'Movie_type',
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
  Movie_type.associate = function (models) {
    // associations can be defined here
  };
  return Movie_type;
};
