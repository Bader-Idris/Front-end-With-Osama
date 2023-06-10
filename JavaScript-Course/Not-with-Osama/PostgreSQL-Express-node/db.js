const Pool = require('pg').Pool;
// pg stands for our installed package postgreSQL
const pool = new Pool({
  user: "postgres",// I think this is super user
  host: "localhost",
  database: "students",//our database we created in pg
  password: "admin",// the passwd I set, and saved in sticky
  port: "5433",// default is 5432 //! this MF wasted 2 hours of my life
});
module.exports = pool;