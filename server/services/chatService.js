/**
* @description: 
* @file: chatController.js
* @author: Vedant Nare
* @version: 1.0
*/ 

/**
*@description Dependencies are installed for execution. 
*/ 

const chatModels = require('../models/chatModel')

class ChatService
{
    sendMessage(body,callback)
    {    
        chatModels.sendMessage(body,(err,data)=>
        {
            if(err)
                callback(err)
            else
                callback(null,data)
        })
    }

    getMessage(req,callback)
    {
        try
        {           
            chatModels.getMessage(req,(err,data)=>
            {
                if(err)
                    callback(err)
                else
                    callback(null,data)
                    
            });
        }
        catch(err)
        {
            console.log('Error: ',err); 
        }
    }


}

module.exports = new ChatService();