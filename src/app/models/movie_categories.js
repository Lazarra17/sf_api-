'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie_categories = sequelize.define(
    'Movie_categories',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      movie_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {}
  );
  Movie_categories.associate = function (models) {
    // associations can be defined here
  };
  return Movie_categories;
};
