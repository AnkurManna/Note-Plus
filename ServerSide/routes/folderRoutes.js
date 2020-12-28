const express = require('express')
const folderRouter = express.Router()
const folderController = require('../controller/folderController');

folderRouter
.route('/')
.get(folderController.getAllFolders)
.post(folderController.createFolder)

folderRouter
.route('/:id')
.get(folderController.getFolder)
.patch(taskController.modifyFolder)
.delete(folderController.deleteFolder)

module.exports = folderRouter;