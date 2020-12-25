const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = "nl_myJwtSecret";
const authmiddleware = require('../middleware/authMiddleware');
const User = require('./../models/userModel');

//@route POST api/v1/auth
//@desc Auth user


router.post( '/',(req,res) =>
{
    console.log("authcall");
    console.log(req.body);
    const {email,password} = req.body;
    if(!email||!password)
    {
        return res.status(400).json({msg:'Please enter all details'});
    }

    User.findOne({email})
    .then(user => {
        if(!user){
            return res.status(400).json({msg:'Email doesnt exists'});
        }
        

        //comparing password
        bcrypt.compare(password,user.password)
        .then(isMatch => {
            if(!isMatch)  res.status(400).json({msg:'Password doesnt match'});
            
            jwt.sign({
                id:user._id
            },jwtSecret,{expiresIn:3600},
            (err,token) => {
                if(err) throw err;
                
                return res.status(200).json({
                    status: 'success',
                    data:user,
                    token
                })
            })
            
        });
        
        
        });


 


});

router.get('/user',authmiddleware,(req,res)=>{

    console.log(req.user,'in get');
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));

});
module.exports = router;