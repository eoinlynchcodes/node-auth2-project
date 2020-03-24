const knex = require('knex');

// const config // require(knex file name);

const db = knex(config.development);

module.exports = db;