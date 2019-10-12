app.service('chatService',function($http,$window)
{
    this.getUserMsg = function($scope) 
    {
    
        $http({
            method: 'GET',
            url: 'http://localhost:3000/getMsg',
        }).then(function (response) 
        {   
            $scope.receiverName = sessionStorage.getItem('receiverName')
            let message = [];
    
            let senderId = sessionStorage.getItem('UserID');
            let receiverId = sessionStorage.getItem('receiverID');         
    
            for(let i=0; i<response.data.result.length; i++)
            {
                let list = response.data.result[i];
                  
                if(senderId == list.sender_id && receiverId == list.receiver_id)
                {
                    message.push(list);                        
                }
                $scope.msgData = message;

                if(senderId == list.receiver_id && receiverId == list.sender_id)
                {
                    message.push(list);                     
                }
                $scope.msgData = message;
                console.log('completed');  
            }
            
        }).then($scope.updateScroll)
        .catch((err)=>{
            return err;
        })
        
    }

    
})

