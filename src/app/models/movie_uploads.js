'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie_uploads = sequelize.define(
    'Movie_uploads',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      path: DataTypes.STRING,
      name: DataTypes.STRING,
      size: DataTypes.STRING,
      movie_id: DataTypes.INTEGER,
      is_trailer: DataTypes.BOOLEAN,
    },
    {}
  );
  Movie_uploads.associate = function (models) {
    // associations can be defined here
  };
  return Movie_uploads;
};
