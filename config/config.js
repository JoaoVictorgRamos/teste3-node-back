const path = require('path');
require('dotenv').config();

console.log('MYSQLUSER:', process.env.MYSQLUSER);
console.log('MYSQLPASSWORD:', process.env.MYSQLPASSWORD);
console.log('MYSQLDATABASE:', process.env.MYSQLDATABASE);
console.log('MYSQLHOST:', process.env.MYSQLHOST);
console.log('DB_DIALECT:', process.env.DB_DIALECT);
console.log('MYSQLPORT:', process.env.MYSQLPORT);

const config = {
  development: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    host: process.env.MYSQLHOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.MYSQLPORT,
  },
  test: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    host: process.env.MYSQLHOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.MYSQLPORT,
  },
  production: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    host: process.env.MYSQLHOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.MYSQLPORT,
  },
};

console.log(config);
module.exports = {
  migrationPath: path.join(__dirname, 'src', 'migrations')
};