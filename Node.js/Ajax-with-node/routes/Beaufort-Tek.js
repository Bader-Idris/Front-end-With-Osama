const { Router } = require('express');
const controller = require('../controllers/Beaufort-Tek');

const tekRouter = Router();
tekRouter.get('/', controller.getStudents);
tekRouter.post("/", controller.addStudent);
tekRouter.get("/:id", controller.getStudentById);
tekRouter.patch("/:id", controller.updateStudent);
tekRouter.delete("/:id", controller.removeStudent);
module.exports = tekRouter;