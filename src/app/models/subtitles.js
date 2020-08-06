'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subtitle = sequelize.define(
    'Subtitles',
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
  Subtitle.associate = function (models) {
    // associations can be defined here
  };
  return Subtitle;
};
