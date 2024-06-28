const { Router } = require('express');
const mainRoutes = Router();

const {
  getUsers
} = require('../controllers/mainRoutes');
mainRoutes.route('/').get(getUsers);

module.exports = mainRoutes;