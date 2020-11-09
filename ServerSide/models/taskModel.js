const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    "task" : {
        type: String,
        required: [true,'A task must have a body'],
        unique : true
    },
    "importance" : {
        type: Number,
        required:[true, 'A task must have importance value']
    }
});

const Task = mongoose.model('Task',TaskSchema);

module.exports = Task;