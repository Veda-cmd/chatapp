/**
* @description: 
* @file: userModel.js
* @author: Vedant Nare
* @version: 1.0
*/ 

/**
*@description Dependencies are installed for execution. 
*/

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
  collection = db.collection('users'); 
});

/**
*@description Schema is defined for storing object in database. 
*/

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
    },
    forgot_token:{
        type: String,
        required:false
    },
    created_at: {
        type: Date,
        default: Date.now 
    },
    updated_at: {
        type: Date,
        default: Date.now 
    }
   
});
const User =  mongoose.model('user',userSchema);

/**
*@description UserModel has the following functions:
* create: for storing user object in database. bcrypt hash method is used for hashing password. 
* login: for checking user credentials are valid or not. bcrypt compare method is used for verifying hashed password.
* forgot : for checking whether user exists or not. UpdateToken is used for storing token if user exists.
* reset: for storing new password in database.
* getAllUsers : for retreiving list of registered users from database. 
*/ 

class UserModel
{
    create(body, callback)
    {
        collection.findOne({email:body.email},(err,result)=>
        {
            if(err)
                callback(err)
            else if(result)
                callback({message:'Email already registered'})
            else
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
        })      
    }

    login(body,callback)
    {   
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
                        let res = {
                            id:result._id,
                            firstName:result.firstName,
                            lastName:result.lastName,
                            email:result.email
                        }
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

    forgot(body, callback)
    {
        collection.findOne({email:body.email},(err,result)=>
        {
            if(err)
                callback(err);
            else if(result)
                callback(null,result);
            else
                callback({message:"User not found"});
                         
        })   
    }

    updateToken(body, callback)
    {
        collection.updateOne({_id:body.id},{$set:{forgot_token:body.verify_token}},(err,result)=>
        {             
            if(err)
                callback(err);
            else if(result)
            {
                callback(null,result); 
            }
                                        
        })   
    }

    reset(body, callback)
    {
        collection.findOne({forgot_token:body.token},(err,result)=>
        {
            if(err)
                callback(err);
            else if(result)
            {
                bcrypt.compare(body.password_old,result.password,(err,res) =>
                {
                    if(err)
                        callback(err);
                    else if(res)
                    {
                        bcrypt.hash(body.password_new,10,(err,hash)=>
                        {
                            if(err)
                                throw err;
                            else
                            {
                                collection.updateOne({_id:result._id},{$set:{password:hash}},(error,data)=>
                                {
                                    if(error)                                    
                                        callback(error);
                                    else
                                        callback(null,{message:"Password updated successfully"});
                                })
                            }
                        })
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

    getAllUsers(body,callback)
    {
        User.find((err,result)=>
        {
            if(err)
                callback(err)
            else
                callback(null,result);
        })
    }

}

module.exports = new UserModel();