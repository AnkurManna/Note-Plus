const express = require('express');
const taskRouter = express.Router();
const taskController = require('../controller/taskController');
const authmiddleware = require('../middleware/authMiddleware');
taskRouter
.route('/')
.get(taskController.getAllTasks)
.post(authmiddleware ,taskController.createTask)

taskRouter
.route('/:id')
.get(taskController.getTask)
.patch(taskController.modifyTask)
.delete(authmiddleware,taskController.deleteTask);
module.exports = taskRouter;