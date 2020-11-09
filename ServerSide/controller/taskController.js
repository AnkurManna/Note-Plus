
const Task = require('./../models/taskModel');
exports.getTask = async (req,res) =>
{
    try{

    
    const task = await Task.findById(req.params.id);
    return res.status(200).json({
        data:task,
        message:'success'
    })
    }
    catch(err)
    {
        res.status(404).json({
            status:'fail'
        })
    }
}
exports.getAllTasks = async (req,res) =>
{
    try
    {
        console.log("here4");
        const tasks = await Task.find();
        res.status(200).json({
            status: 'success',
            results : tasks.length,
            data :
            {
                tasks
            }
        })
    }
    catch(err)
    {
        res.status(404).json({
            status:'fail'
        })
    }
    
}
exports.createTask = async (req,res) =>
{
    console.log("called");
    console.log(req.body);
    try
    {

        
        const newTask = await Task.create(req.body);
        res.status(201).json({
            status:'success',
            data:
            {
                task:newTask
            }
        })
    }
    catch (err)
    {
        console.log('error ',err);
        res.status(400).json({
            status:'failed',
            message:err
        })
    }
}
exports.deleteTask = async (req,res) =>
{
    try
    {
        const tour = await Task.findByIdAndDelete(req.params.id);
    
    
        res.status(201).json({
            status:'success',
            data:
            {
                status:'task deleted'
            }
        })
    }
    catch (err)
    {
        console.log('error ',err);
        res.status(400).json({
            status:'failed',
            message:err
        })
    }
}
exports.modifyTask = async (req,res) =>
{
    try
    {
        const tour = await Task.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        });
    
    
        res.status(201).json({
            status:'success',
            data:
            {
                status:'task updated'
            }
        })
    }
    catch (err)
    {
        console.log('error ',err);
        res.status(400).json({
            status:'failed',
            message:err
        })
    }

}

