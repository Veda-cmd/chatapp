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
}

module.exports = new UserService();

