const chatModel = require('../models/chatModel')

class chatService{

    saveMessage(req,callback)
    {
        chatModel.saveMessage(req,(err,data)=>
        {
            if(err)
                callback(err)
            else
                callback(null,data)
        })
    }
}

module.exports = new chatService();