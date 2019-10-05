const userModel = require('../models/userModel');

class UserService {
    register(body, callback) {
        userModel.create(body, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    }

    login(body, callback) {
        
        userModel.login(body, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data);
            }
        })
    }

    forgot(body, callback) {
        
        userModel.forgot(body, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data);
            }
        })
    }

    update(body,callback)
    {
        userModel.update(body,(err,data)=>{
            if (err) {
                callback(err)
            } else {
                callback(null, data);
            }
        })
    }

    reset(body,callback)
    {
        userModel.reset(body,(err,data)=>{
            if (err) {
                callback(err)
            } else {
                callback(null, data);
            }
        })
    }
}

module.exports = new UserService();

