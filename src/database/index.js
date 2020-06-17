const Sequelize = require('sequelize');
const databaseConfig = require('./connection');

let DB;

try {
  DB = new Sequelize(databaseConfig);
} catch (e) {
  throw new Error(e);
}

module.exports = DB;