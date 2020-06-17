const DB        = require('../database');
const Sequelize = require('sequelize');
const config    = require('../config');
const path      = require('path');

const orm = {};

// Instantiate sequelize models
config.files.models.forEach((modelPath) => {
  try {
    const model = DB.import(path.resolve(modelPath));
    orm[model.name] = model;
  } catch (e) {
    throw new Error(e);
  }
});


 // Once all models have been loaded, establish the associations between them
 Object.keys(orm).forEach((modelName) => {
    if (orm[modelName].associate) {
      orm[modelName].associate(orm);
    }
    
  });

  // Expose the instantiated sequelize connection object
  orm.sequelize = DB;

  // Expose the global Sequelize library
  orm.Sequelize = Sequelize;


  orm.sync = () => {
    // Sync makes sure the database tables are created if they don't exist
    return DB.sync({
      force: (config.database.shouldMigrate || false),
    });
  };
  orm.seed = () => {
    // Sync makes sure the database tables are created if they don't exist
    // and the `force` parameter will also drop the tables before re-creating them
    return DB.sync({ force: config.database.shouldMigrateAndReset });
  };

module.exports = orm;