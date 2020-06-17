module.exports = {
  app: {
    title: 'SUPER FLIX API - Development Environment',
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
    secure: false,
    ephemeral: true,
    domain: 'localhost',
  },
  blacklists: {},
  whitelists: {},
  uploads: {},
  database: {
    shouldMigrateAndReset: false,
    shouldMigrate: false,
    shouldSeed: true,
  },
};
