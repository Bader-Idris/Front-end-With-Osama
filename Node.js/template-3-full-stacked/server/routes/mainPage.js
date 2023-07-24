const { Router } = require('express');
const mainPage = Router();

const {
  getUsers,
  getUser,
  postUser,
  updateUser,
  deleteUser,

} = require('../controllers/mainPage')

mainPage.route('/').get(getUsers);//dang

// life is tough when learning CRAZY BE
module.exports = mainPage;