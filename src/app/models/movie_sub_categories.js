'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie_sub_categories = sequelize.define(
    'Movie_sub_categories',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      movie_id: DataTypes.INTEGER,
      sub_category_id: DataTypes.INTEGER,
    },
    {}
  );
  Movie_sub_categories.associate = function (models) {
    // associations can be defined here
  };
  return Movie_sub_categories;
};
