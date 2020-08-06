'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie_picture = sequelize.define('Movie_picture', {
    path: DataTypes.STRING,
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    movie_id: DataTypes.INTEGER
  }, {});
  Movie_picture.associate = function(models) {
    // associations can be defined here
  };
  return Movie_picture;
};