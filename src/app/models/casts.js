'use strict';
module.exports = (sequelize, DataTypes) => {
  const Casts = sequelize.define(
    'Casts',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      identifier: DataTypes.STRING,
      full_name: DataTypes.STRING,
    },
    {}
  );
  Casts.associate = function (models) {
    // associations can be defined here
  };
  return Casts;
};
