
const User = require('./../models/userModel');
exports.getUser = async (req,res) =>
{
    try{

    
    const user = await User.findById(req.params.id);
    return res.status(200).json({
        data:user,
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

exports.createUser = async (req,res) =>
{
    console.log("called");
    console.log(req.body);
    try
    {

        
        const newUser = await User.create(req.body);
        res.status(201).json({
            status:'success',
            data:
            {
                user:newUser
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
exports.deleteUser = async (req,res) =>
{
    try
    {
        const user = await User.findByIdAndDelete(req.params.id);
    
    
        res.status(201).json({
            status:'success',
            data:
            {
                status:'user deleted'
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
exports.modifyUser = async (req,res) =>
{
    try
    {
        const tour = await User.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        });
    
    
        res.status(201).json({
            status:'success',
            data:
            {
                status:'user updated'
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

