/**
* @description: 
* @file: auth.js
* @author: Vedant Nare
* @version: 1.0
*/ 

var jwt = require('jsonwebtoken');

/**
* @description generateToken is used for generating a json web token.
*/

generateToken = (payload) =>
{
  let token = jwt.sign(payload, 'secret',{ expiresIn: '24h'});
  return token;
}

/**
* @description checkToken is used for verifying a json web token.
*/

checkToken=(req,res,next)=>{
    var bearerHeader = req.body.token;
    req.authenticated = false;
    if (bearerHeader){
        jwt.verify(bearerHeader, 'secret', function (err, decoded){
            if (err){
                console.log(err);
                req.authenticated = false;
                req.decoded = null;
                next();
            } else {
                req.decoded = decoded;
                req.authenticated = true;
                next();
            }
        });
    }
}
module.exports={checkToken,generateToken}

