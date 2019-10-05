require('dotenv').config();
const service = require('../services/userService');
const mail = require('../util/mail');

class UserController {
    register(req, res) 
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
        })
    }

    login(req,res)
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

    forgot(req, res) 
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
                result = mail.generateToken(payload),
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
                        let url = 'http://127.0.0.1:5500/client/#!/reset/'+result;
                        console.log(url);
                        mail.sendLink(url);
                        res.status(200).send(data);
                    }
                })
            }
        }) 
    }

    reset(req, res) 
    {
        // req.check('email','Invalid email').isEmail();
        // const errors = req.validationErrors();
        // if (errors) 
        //     return res.status(422).json({ errors: errors });
        let result={
            token:req.headers.token,
            password_old:req.body.password,
            password_new:req.body.password1
        }
        service.reset(result, (err, data) => {   
            if (err)
                res.status(422).send(err);
            else
                res.status(200).send(data);
        })
    }
       
}

module.exports = new UserController();
