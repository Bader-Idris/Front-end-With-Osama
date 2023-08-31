const { Router } = require('express');
const freeCodeCamp = Router();

const {
  getTest,
  postTest,

  sweetAlertGet,
  sweetAlertPost
} = require('../controllers/freeCodeCamp')

freeCodeCamp.route('/').get(getTest).post(postTest)
freeCodeCamp.route('/sweetalertfile').get(sweetAlertGet).post(sweetAlertPost)

module.exports = freeCodeCamp;