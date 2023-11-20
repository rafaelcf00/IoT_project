const config = require("./env-config");

const dbName = config.db_name;
const dbUser = config.db_user;
const dbHost = config.db_host;
const dbPassword = config.db_pass;
const dbDialect = config.db_dialect;

module.exports = {
  development: {
    username: `${dbUser}`,
    password: `${dbPassword}`,
    database: `${dbName}`,
    host: dbHost,
    dialect: `${dbDialect}`,
    dialectOptions: {
      ssl: {
        require: false,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    username: `${dbUser}`,
    password: `${dbPassword}`,
    database: `${dbName}`,
    host: dbHost,
    dialect: `${dbDialect}`,
  },
  production: {
    username: `${dbUser}`,
    password: `${dbPassword}`,
    database: `${dbName}`,
    host: dbHost,
    dialect: `${dbDialect}`,
    dialectOptions: {
      ssl: {
        require: false,
        rejectUnauthorized: false,
      },
    },
  },
};
