const {  Router } = require('express');
const controller = require('./controller');

const router = Router();
router.get('/', controller.getStudents);//John's approach is more cleaner
router.post("/", controller.addStudent);//updating db
router.get("/:id", controller.getStudentById);
router.put("/:id", controller.updateStudent);//patch is better [partial changing]
router.delete("/:id", controller.removeStudent);

module.exports = router;