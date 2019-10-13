/**
* @description: 
* @file: chatModel.js
* @author: Vedant Nare
* @version: 1.0
*/ 

/**
*@description Dependencies are installed for execution. 
*/

const mongoose = require('mongoose');

/**
*@description Schema is defined for storing object in database. 
*/

const messageSchema = mongoose.Schema({
    senderName: {
        type: String,
        required: true
    },
    sender_id:{
        type:String,
        required:true
    },
    receiverName: {
        type: String,
        required: true
    },
    receiver_id:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});
const Message =  mongoose.model('message',messageSchema);

class chatModel
{
    sendMessage(body,callback)
    {   
        try
        {
            const message = new Message({
                senderName:body.senderName,
                sender_id:body.senderId,
                receiverName:body.receiverName,
                receiver_id:body.receiverId,
                message:body.message
            })

            /**
            *@description save method is used for saving message in database. 
            */ 

            message.save((err,data)=>
            {
                if(err)
                    callback(err)
                else
                    callback(null,data)
            })
        }
        catch(err)
        {
            console.log('Error: ',err);
        }
    }

    getMessage(body,callback)
    {
        try
        {
            /**
            *@description find method is used for retreiving whole list of objects from database. 
            */ 

            Message.find((err,data)=>{
                if(err)
                    callback(err)
                else{
                    callback(null,data)
                }
                    
            })
        }
        catch(err)
        {
            console.log('Error: ',err);
        }
    }
}

module.exports = new chatModel();