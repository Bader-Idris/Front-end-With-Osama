const getStudents = "SELECT * FROM students";// to migrate to controller
const getStudentById = "SELECT * FROM students WHERE id = $1";//$1 is our parameter
// s is aliased 🔽
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";
//$ 1234 are vars inside controller 🔽
const addStudent = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const removeStudent = "DELETE FROM students WHERE id = $1";
const updateStudent = "UPDATE students SET name = $1 WHERE id = $2";

module.exports = {
  getStudents,
  getStudentById,
  checkEmailExists,
  addStudent,
  removeStudent,
  updateStudent,
};