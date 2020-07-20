'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define(
    'Movies',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      identifier: DataTypes.STRING,
      title: DataTypes.STRING,
      type_id: DataTypes.INTEGER,
      details: DataTypes.TEXT,
    },
    {}
  );
  Movies.associate = function (models) {
    // associations can be defined here
  };
  return Movies;
};
