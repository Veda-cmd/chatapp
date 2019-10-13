/**
* @description: 
* @file: userController.js
* @author: Vedant Nare
* @version: 1.0
*/ 

/**
*@description Dependencies are installed for execution. 
*/ 

require('dotenv').config();
const service = require('../services/userService');
const auth = require('../auth/auth');

class UserController 
{
    /**
    *@description Register function is used for user registration. 
    */

    register(req, res) 
    {
        try
        {
            /**
            * @description express-validator is used for validation of input. 
            */ 

            req.check('email','Invalid email').isEmail();
            req.check('password','Invalid password').isLength({ min: 6 }).isAlphanumeric();
            const errors = req.validationErrors();
            if (errors) {
                return res.status(422).json({ errors: errors })
            }

            service.register(req.body, (err, data) => {
                if (err)
                    res.status(422).send(err);
                else
                    res.status(200).send(data);
            });
        }
        catch(err){
            console.log("Error: "+err);
        }
        
    }

    /**
    *@description Login function is used for user login. 
    */

    login(req,res)
    {
        try
        {
            /**
            * @description express-validator is used for validation of input. 
            */

            req.check('email','Invalid email').isEmail();
            req.check('password','Invalid password').isLength({ min: 6 }).isAlphanumeric();
            const errors = req.validationErrors();
            if (errors) {
                return res.status(422).json({ errors: errors })
            }
                
            var promise = new Promise((resolve,reject)=>
            {
                service.login(req.body, (err, data) => {
                    if (err)
                    reject(err);
                    else
                    resolve(data);                    
                })        
            })
            promise.then(data =>
                {
                    res.status(200).send(data);
                }) 
                .catch(err =>
                {                
                    res.status(422).send(err);
                })
        }    
        catch(err)
        {
            console.log("Error: "+err);
        }        
    }

    /**
    *@description Forgot Password api is used for resetting user password. 
    */

    forgot(req, res) 
    {
        try
        {
            /**
            * @description express-validator is used for validation of input. 
            */

            req.check('email','Invalid email').isEmail();
            const errors = req.validationErrors();
            if (errors) 
                return res.status(422).json({ errors: errors });

            service.forgot(req.body, (err, data) => {
                if (err)
                    res.status(422).send(err);
                else
                {   
                    /**
                    * @description Token is generated and stored in a variable
                    */

                    let payload = {email:data.email},
                    result = auth.generateToken(payload),
                    req={
                        id:data._id,
                        verify_token:result
                    };
                    service.update(req,(err,data)=>
                    {   
                        if(err)
                            res.status(422).send(err);
                        else
                        {
                            let url = 'http://localhost:3000/#!/reset/'+result;
                            service.sendLink(url,payload);
                            res.status(200).send(data);
                        }
                    })
                }
            }) 
        }
        catch(err)
        {
            console.log("Error: "+err);
        } 
        
    }

    /**
    *@description Reset Password api is used for storing new password. 
    */

    reset(req, res) 
    {
        try
        {
            /**
            * @description express-validator is used for validation of input. 
            */

            req.check('password','Invalid password').isLength({ min: 6 }).isAlphanumeric();
            req.check('password_new','Invalid password').isLength({ min: 6 }).isAlphanumeric();
            const errors = req.validationErrors();
            if (errors) 
                return res.status(422).json({ errors: errors });
    
            let result={
                token:req.body.token,
                password_old:req.body.password,
                password_new:req.body.password_new
            }
            service.reset(result, (err, data) => {   
                if (err)
                    res.status(422).send(err);
                else
                    res.status(200).send(data);
            });
        }
        catch(err)
        {
            console.log("Error: "+err);
        } 
       
    }

    /**
    *@description Get all users api is used for retreiving list of registered users. 
    */

    getAllUsers(req,res)
    {
        try
        {
            service.getAllUsers(req,(err,data)=>{
                if(err)
                    res.status(422).send(err);
                else
                    res.status(200).send(data);
            })
        }
        catch(err)
        {
            console.log("Error: "+err);
        } 
    }
       
}

module.exports = new UserController();