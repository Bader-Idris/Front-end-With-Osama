const express = require('express');
// we'll call router instead of do the routing manually in our router.js as a middleware
const router = express.Router();
// let { people } = require('../data') needs to be in controllers dir
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson
} = require('../controllers/people')//Destructuring obj

// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)
//! a shorter version with same functionality
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)


// router.listen(5000, () => {})//! it's only for main module
module.exports = router

// he created a dir called controllers for the mvc pattern
// which is to clean this module by making it only as an invoker

// after finishing this course, I figured out that it's 1/4 of a full course [title was shiny]
// next video 10H is named //! ` Node.js / Express Course - Build 4 Projects `