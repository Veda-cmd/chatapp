/**
 * @description: 
 * @file: chatService.js
 * @author: Vedant Nare
 * @version: 1.0
 */ 

app.service('chatService',function($http)
{
    /** 
    *@description To get all messages from database 
    */

    this.getMessages = function($scope) 
    {
    
        /** 
        *@description http service is used to get messages from database. 
        */

        $http({
            method: 'GET',
            url: 'http://localhost:3000/getMessage',
        }).then(function (response) 
        {   
            let message = [],
            senderId = sessionStorage.getItem('UserID'),
            receiverId = sessionStorage.getItem('receiverID');         
    
            /** 
            *@description for loop is used fo filte out receiver and sender messages 
            */

            for(let i=0; i<response.data.result.length;i++)
            {
                let list = response.data.result[i];
                  
                if(senderId == list.sender_id && receiverId == list.receiver_id)
                {
                    message.push(list);                        
                }
                $scope.messageData = message;

                if(senderId == list.receiver_id && receiverId == list.sender_id)
                {
                    message.push(list);                     
                }
                $scope.messageData = message;
                // console.log('completed');  
            }
            
        }).then($scope.updateScroll)
        .catch((err)=>{
            return err;
        })    
    }    
})

