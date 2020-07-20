'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tv_shows = sequelize.define(
    'Tv_shows',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      movie_id: DataTypes.INTEGER,
      identifier: DataTypes.STRING,
      title: DataTypes.STRING,
      tv_season_id: DataTypes.INTEGER,
    },
    {}
  );
  Tv_shows.associate = function (models) {
    // associations can be defined here
  };
  return Tv_shows;
};
