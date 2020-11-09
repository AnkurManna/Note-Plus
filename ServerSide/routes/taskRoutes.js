const express = require('express');
const taskRouter = express.Router();
const taskController = require('../controller/taskController');

taskRouter
.route('/')
.get(taskController.getAllTasks)
.post(taskController.createTask)

taskRouter
.route('/:id')
.get(taskController.getTask)
.patch(taskController.modifyTask)
.delete(taskController.deleteTask);
module.exports = taskRouter;