const { Router } = require('express');
const mainPage = Router();

const {
  getUsers,
  getUser,
  postUser,
  updateUser,
  deleteUser,

} = require('../controllers/mainPage')

mainPage.route('/').get(getUsers)
// mainPage.route('/').get(getUserPrompt).post(postUserPrompt)
// mainPage.route('/').post(postDownloadPage)
// mainPage.route('/').get(projectsPage)

module.exports = mainPage;