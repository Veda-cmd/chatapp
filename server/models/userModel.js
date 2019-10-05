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
    created_at: Date,
    updated_at: Date
   
});
const User =  mongoose.model('user',userSchema);

class UserModel{
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
                        callback(null,{message:"Login succesful"});
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

    update(body, callback)
    {
        collection.updateOne({_id:body.id},{$set:{forgot_token:body.verify_token}},(err,result)=>
        {
            if(err)
                callback(err);
            else if(result)
                callback(null,result);                         
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
                    console.log(res);
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
                                        callback({message:"Updated successfully"});
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

}

module.exports = new UserModel();