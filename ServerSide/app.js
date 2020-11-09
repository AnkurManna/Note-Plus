const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());


/* const testTask = new Task({
    task: 'Complete Electrostatics',
    importance: 5
});

Task.init().then(testTask.save().then(doc => {
    //console.log(doc);
}).catch(err => {
    console.log('error',err);
})).catch(err =>{
    console.log('duplicate key');
});


 */


const taskRouter = require('./routes/taskRoutes');
const userRouter = require('./routes/userRoutes');
app.use('/api/v1/users',userRouter);
app.use('/api/v1/tasks',taskRouter);
module.exports = app;
