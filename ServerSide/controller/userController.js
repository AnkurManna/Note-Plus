
const User = require('./../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const keys = require('../keys');
const jwtSecret = keys.jwtSecret;
exports.getAllUsers = async (req,res) =>
{
    try
    {
        //console.log("getAllTask");
        const tasks = await User.find();

        console.log(tasks);
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
        console.log(err);
        res.status(404).json({
            status:'fail'
        })
    }
    
}
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
    const {name,email,password} = req.body;
    if(!name||!email||!password)
    {
        return res.status(400).json({msg:'Please enter all details'});
    }

    User.findOne({email})
    .then(user => {
        if(user){
            return res.status(400).json({msg:'Email already exists'});
        }
        const newUser = new User ({
            name,email,password
        });

        //create Salt &hash
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if(err)
                throw err;

                newUser.password = hash;
                newUser.save()
                .then(user =>{

                    jwt.sign({
                        id:newUser._id
                    },jwtSecret,{expiresIn:3600},
                    (err,token) => {
                        if(err) throw err;
                        
                        res.status(200).json({
                            status: 'success',
                            data:newUser,
                            token
                        })


                    }
                    )
                    

                });
            })
        })
    })
    /*
    try
    {
        const newUser = await User.create(req.body);
        jwt.sign({
            id:newUser._id
        },jwt,{expiresIn:3600},(err,token)=>{
            if(err)
            throw err;

            res.status(201).json({
                status:'success',
                token,
                data:
                {
                    user:newUser
                }
            })
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

    try
    {

        
        const newTask = await User.create(req.body);
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
    }*/
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

