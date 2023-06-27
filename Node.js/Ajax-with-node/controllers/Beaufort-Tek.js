const pool = require('../db/db');
const queries = require('../db/tekQueries');
/*
  ! it's important to use this if null, because server will stop if not with POST
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  11th in express course with John is awesome for solving these bugs here!!
  12 is more neat, so I thought it's useless, but It's not, //! it's powerful
*/

const getStudents = (req, res) => {
  // this query method has two parameters, 1st is SQL statement
  pool.query(queries.getStudents, (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);// my database blocks it from accessing data!!
  });
};
const getStudentById = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(queries.getStudentById, [id], (err, results) => {//if multiple [id, name, blab]
    if (err) throw err;
    res.status(200).json(results.rows);
  })
};
const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  // check if email is valid, meaning not to exist in DB
  pool.query(queries.checkEmailExists, [email], (err, results) => {
    // it returns rows if email exists!
    if (results.rows.length) res.send("Email already exists.");
    // when user does not exist🔽
    pool.query(queries.addStudent,
      [name, email, age, dob],
      (err, results) => {
        if (err) throw err;
        res.status(201).send("Student Created successfully!");
      });
  });
}
const removeStudent = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (err, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      if (err) throw err;
      res.send("Student does not exist in database.");
    }

    pool.query(queries.removeStudent, [id], (err, results) => {
      if (err) throw err;
      res.status(200).send("Student removed successfully");
    })
  });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  // we'll only allow user to update his name
  const { name } = req.body;

  pool.query(queries.removeStudent, [id], (err, results) => {
    const noStudentFound = !results.rows.length;//same as above, you can shorten it as John did in express tutorial
    if (noStudentFound) {
      if (err) throw err;
      res.send("Student does not exist in database.");
    }

    pool.query(queries.updateStudent, [name, id], (err, results) => {
      if (err) throw err;
      res.status(200).send("Student updated successfully");
    });
  })
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent,
};