const Pool = require('pg').Pool;
require('dotenv').config();
const pool = new Pool({
  user: process.env.USER,//when I made this as USERNAME it returned fs username,
  // and ignored process.env.MY_VALUE, Ania was using Mac OS
  host: process.env.HOST,
  password: process.env.PASSWORD,
  port: process.env.DBPORT,// default is 5432
  database: "todoapp",
});
module.exports = pool;