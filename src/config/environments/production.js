const _ = require('lodash');
const defaultConfig = require('./development');

module.exports = _.merge(defaultConfig, {
  app: {
    title: 'SUPER FLIX API - Production Environment',
    description: 'SUPER FLIX API',
    keywords: 'super flix api, web, magente',
  },
  secure: {
    ssl: false,
    privateKey: '',
    certificate: '',
    caBundle: '',
  },
  cors: {
    origin: ['http://localhost:3000'],
    credentials: true,
  },
  jwt: {
    httpOnly: true,
    secure: true,
    ephemeral: true,
    domain: 'localhost', //real domain
  },
  blacklists: {},
  whitelists: {},
  uploads: {},
  database: {
    shouldMigrateAndReset: false,
    shouldMigrate: false,
    shouldSeed: true,
  },
});
