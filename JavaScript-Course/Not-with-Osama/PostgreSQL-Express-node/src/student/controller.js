const pool = require('../../db');

const getStudents = (req, res) => {
  // this query method has two parameters, 1st is SQL statement
  pool.query("SELECT * FROM students", (err, results)=> {
    if (err) throw err;
    res.status(200).json(results.rows);// my database blocks it from accessing data!!
  });
};

module.exports = {
  getStudents,
};