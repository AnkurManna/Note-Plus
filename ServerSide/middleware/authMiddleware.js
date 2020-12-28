const jwt = require('jsonwebtoken');
const keys = require('../keys');
const jwtSecret = keys.jwtSecret;
function auth(req, res, next) {
    const token = req.header('x-auth-token');

    if(!token) return res.status(401).json({ msg: 'No token,authorizatio denied'});

        try{

            var decoded = jwt.verify(token,jwtSecret);
            console.log(decoded,'dec');
            //Add user from payload to authorized
            req.user = decoded;
            console.log(req.user,'after assgn');
            
            next();

        }
        catch(err)
        {
            return res.status(400).json({message:'Token not valid'});
        }
        //Verify token 
      
    
}

module.exports = auth;