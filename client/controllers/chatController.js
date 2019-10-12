app.controller('chatController', function($scope,$location,chatService,userService,SocketService) 
{
    try
    {
        let messagePattern = /^[\w+\s+]{1,}$/;
        $scope.msgData = [];
        $scope.currUser = sessionStorage.getItem('Username');
        $scope.currUserId=sessionStorage.getItem('UserID');

        $scope.getUser = (item) =>
        {
            sessionStorage.setItem('receiverID',item._id);
            sessionStorage.setItem('receiverName',item.firstName);
            $scope.getUserMessage();
        }
    ,
        $scope.getUserMessage = function () {
            chatService.getUserMsg($scope);
            
        }

        $scope.updateScroll = function(){
            var element = document.querySelector('.msgspace');
            element.scrollTop = element.scrollHeight;
            console.log('Success',element.scrollTop);  
        }

        // chatService.emit('room', { roomId: $scope.id});

        userService.getAllUsers().
        then(res=>
            {
                $scope.users = res.data;
            })
        .catch(err=>
            {
                console.log(err);
            });
        
        $scope.sendMsg = function() {
            if(!messagePattern.test($scope.msg))
                return;
            let sendMsgData={
            senderName : sessionStorage.getItem('Username'),
            sender_id : sessionStorage.getItem('UserID'),
            receiverName : sessionStorage.getItem('receiverName'),
            receiver_id : sessionStorage.getItem('receiverID'),
            message:$scope.msg
            }
            SocketService.emit("newMsg", sendMsgData);
            $scope.msgData.push(sendMsgData);
        
        }

        var senderId = sessionStorage.getItem('UserID');
        SocketService.on(senderId, function (message) {
            console.log('Message emitted');
            if (sessionStorage.getItem('receiverID') == message.senderId) 
            {
                if ($scope.msgData === undefined) 
                    $scope.msgData = message;
                else{ 
                    $scope.msgData.push(message); 
                }     
            }
        })

        $scope.clearTextArea = function () {
            $scope.msg = '';
        }

        $scope.logout = function(){
            $location.path('/login'); 
        }
    }
    catch(err)
    {
        console.log('Error: ',err);    
    }

})