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
//const folderRouter = require('./routes/folderRoutes');
const authRouter = require('./routes/auth');
app.use('/api/v1/users',userRouter);
app.use('/api/v1/tasks',taskRouter);
app.use('/api/v1/auth',authRouter);
//app.use('/api/v1/folders',folderRouter);
module.exports = app;
