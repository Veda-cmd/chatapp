const chatService = require('../services/chatService.js')

class chatController{

    saveMessage(req,callback)
    {
        console.log(req)
        let result = {
            senderName: req.sender,
            receiverName:req.receiver,
            senderId: req.sender_Id,
            receiverId:req.receiver_Id,
            message:req.data.input
        }
        chatService.saveMessage(result,(err,data)=>
        {
            if(err)
                callback(err)
            else
                callback(null,data)
        })
    }
}

module.exports = new chatController();