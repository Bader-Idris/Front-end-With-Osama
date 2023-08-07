const { Router } = require('express');
const subMime = Router();

const {
  getUserPrompt,
  postUserPrompt,
  downloadPage,
  postDownloadPage,
  projectsPage,
  getBitoForm,
  bitoForm
} = require('../controllers/main-nav')

subMime.route('/user_prompt').get(getUserPrompt).post(postUserPrompt)
subMime.route('/downloadfile').get(downloadPage)
subMime.route('/download-pdf').post(postDownloadPage)
subMime.route('/projects').get(projectsPage)
subMime.route('/submit').get(getBitoForm).post(bitoForm)

module.exports = subMime;