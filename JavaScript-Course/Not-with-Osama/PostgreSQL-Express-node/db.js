const Pool = require('pg').Pool;
// pg stands for our installed package postgreSQL
const pool = new Pool({
  user: "postgres",// I think this is super user
  host: "localhost",
  database: "students",//our database we created in pg
  password: "admin",// the passwd I set, and saved in sticky
  port: "5432",
});
module.exports = pool;