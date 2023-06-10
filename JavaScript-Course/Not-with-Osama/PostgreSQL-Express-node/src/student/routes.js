const {  Router } = require('express');
const controller = require('./controller');

const router = Router();
router.get('/', controller.getStudents);//John's approach is more cleaner
module.exports = router;