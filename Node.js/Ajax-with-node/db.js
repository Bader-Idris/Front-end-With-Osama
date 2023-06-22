const Pool = require('pg').Pool;
require('dotenv').config();
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  port: process.env.DBPORT,// default is 5432
  database: "test",
});
module.exports = pool;
