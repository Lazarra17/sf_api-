const Hashids = require('hashids/cjs');

module.exports = () => new Hashids('superflixhalt', 12);
