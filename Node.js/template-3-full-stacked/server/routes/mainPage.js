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

module.exports = mainPage;