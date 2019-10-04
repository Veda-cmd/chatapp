const service = require('../services/userService');

class UserController {
    register(req, res) 
    {
        req.check(req.body.email).isEmail();
        req.check(req.body.password).isLength({ min: 6 }).isAlphanumeric();
        const errors = req.validationErrors();
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
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
        let email = req.body.email,password = req.body.password;
        check('email','Invalid username').isEmail();
        check('password','Invalid password').isLength({ min: 6 }).isAlphanumeric();
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
          }
        service.login(req.body, (err, data) => {
            if (err)
                res.status(422).send(err);
            else
                res.status(200).send(data);
        })        
    }
}

module.exports = new UserController();
