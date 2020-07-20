'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie_cast = sequelize.define(
    'Movie_cast',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      movie_id: DataTypes.INTEGER,
      cast_id: DataTypes.INTEGER,
    },
    {}
  );
  Movie_cast.associate = function (models) {
    // associations can be defined here
  };
  return Movie_cast;
};
