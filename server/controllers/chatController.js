/**
* @description: 
* @file: chatController.js
* @author: Vedant Nare
* @version: 1.0
*/ 

/**
*@description Dependencies are installed for execution. 
*/ 

const chatService = require('../services/chatService')

class chatController
{
    /**
    *@description Send message api is used for storing sent message object. 
    */

    sendMessage(req,callback)
    {
        try
        {
            let messageData = {
                senderId:req.sender_id,
                senderName:req.senderName,
                receiverId:req.receiver_id,
                receiverName:req.receiverName,
                message:req.message
            },
            response = {};
            
            chatService.sendMessage(messageData,(err,data)=>
            {
                if(err)
                {
                    response.success = false;
                    callback(response);
                }
                else
                {
                    response.success = true;
                    response.content = data; 
                    callback(null,response);
                }
            });      
        }
        catch(err){
            return err;
        }
    }
    
    /**
    *@description Get message api is used for retreiving list of messages from database. 
    */

    getMessage(req,res)
    {
        try
        {
            let response = {};

            chatService.getMessage(req,(err,data) =>
            {
                if(err)
                {   
                    response.success = false;
                    response.error=err;
                    res.status(422).send(response);
                }
                else
                {
                    response.success = true;
                    response.result=data;
                    res.status(200).send(response);
                }
            });
        }
        catch(err){
            return err;
        }
    }

}


module.exports = new chatController();