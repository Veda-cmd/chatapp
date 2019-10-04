const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bcrypt = require('bcrypt');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'chat-app';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  db = client.db(dbName);
});

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
});
const User =  mongoose.model('user',userSchema);

class UserModel{
    create(body, callback)
    {

        bcrypt.hash(body.password,10,(err,hash)=>
        {
            if(err)
                throw err;
            const user = new User({
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
                password: hash
            })
            user.save((err, data) => {
                if(err){
                    callback(err)
                }else{
                    callback(null, data)
                }
            })
        })
    }

    login(body,callback)
    {   
        let collection = db.collection('users'); 
        collection.findOne({email:body.email}, (err,result) =>
        {
            
            if(err)
                callback(err)
            else if(!result)
                callback({message:"User not found"})
            else
            {
                bcrypt.compare(body.password,result.password,(err,res) =>
                {
                   if(err)
                        callback(err);
                    else if(res)
                    {
                        console.log("Login successful");
                        callback(null,res);
                    } 
                    else
                    {
                        console.log("Login Failed");
                        callback({message:"Wrong password entered"});
                    }
                })
            }
        })

    
    }
}
module.exports = new UserModel();