'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie_subtitle = sequelize.define(
    'movie_subtitle',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      path: DataTypes.STRING,
      name: DataTypes.STRING,
      size: DataTypes.STRING,
      type: DataTypes.STRING,
      movie_id: DataTypes.INTEGER,
      subtitle_id: DataTypes.INTEGER,
    },
    {}
  );
  Movie_subtitle.associate = function (models) {
    // associations can be defined here
  };
  return Movie_subtitle;
};
