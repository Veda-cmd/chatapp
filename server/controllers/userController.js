require('dotenv').config();
const service = require('../services/userService');
const auth = require('../auth/auth');

class UserController {
    register(req, res) 
    {
        try
        {
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

    login(req,res)
    {
        try
        {
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

    forgot(req, res) 
    {
        try
        {
            req.check('email','Invalid email').isEmail();
            const errors = req.validationErrors();
            if (errors) 
                return res.status(422).json({ errors: errors });

            service.forgot(req.body, (err, data) => {
                if (err)
                    res.status(422).send(err);
                else
                {   
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

    reset(req, res) 
    {
        try
        {
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