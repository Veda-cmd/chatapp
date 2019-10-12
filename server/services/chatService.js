const chatModels = require('../models/chatModel')


class ChatService
{
    sendMsgService(msgData,callback)
    {    
        chatModels.sendMsg(msgData,(err,data)=>
        {
            if(err)
                callback(err)
            else
                callback(null,data)
        })
    }


    getMsgService(req,callback)
    {
     try
     {           
        chatModels.getMsg(req,(err,data)=>
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