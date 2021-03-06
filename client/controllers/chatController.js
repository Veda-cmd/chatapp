/**
 * @description: 
 * @file: chatController.js
 * @author: Vedant Nare
 * @version: 1.0
 */ 

app.controller('chatController', function($scope,$window,chatService,userService,SocketService) 
{
    try
    {
        /**
        *@description variables are initialized and are assigned values.
        */

        let messagePattern = /^[\w&$@!?.,:;]+( +[\w&$@!?.,:;]+)*$/;
        $scope.messageData = [];
        $scope.loggedUser = sessionStorage.getItem('Username');
        $scope.loggedUserId = sessionStorage.getItem('UserID');
       

        /**
        *@description getUser function is used for getting history of user chat. 
        */ 

        $scope.getUser = (item) =>
        {
            sessionStorage.setItem('receiverID',item._id);
            sessionStorage.setItem('receiverName',item.firstName);
            $scope.receiver = sessionStorage.getItem('receiverName');
            $scope.getUserMessage();
        }
    
        $scope.getUserMessage = function () {
            chatService.getMessages($scope);
        }

        /**
        * @description To set the scrollbar to bottom once messages are loaded.
        */ 

        $scope.updateScroll = function(){
            var element = document.querySelector('.chatDisplay');
            element.scrollTop = element.scrollHeight;
            console.log('Success',element.scrollTop); 
        }

        // chatService.emit('room', { roomId: $scope.id});

        /**
        * @description To get list of users registered.
        */

        userService.getAllUsers().
        then(res=>
        {
            $scope.users = res.data;
        })
        .catch(err=>
        {
            console.log(err);
        });
        
        /**
        * @description To load the message in database and display to the current user.
        */

        $scope.sendUserMessage = function() 
        {
            if(!messagePattern.test($scope.message) || $scope.message == undefined)
            {
                console.log('Success',$scope.message);
                return;
            }  
             
            let sendMessage={
            senderName : sessionStorage.getItem('Username'),
            sender_id : sessionStorage.getItem('UserID'),
            receiverName : sessionStorage.getItem('receiverName'),
            receiver_id : sessionStorage.getItem('receiverID'),
            message:$scope.message
            }

            SocketService.emit("send", sendMessage);
            $scope.messageData.push(sendMessage);
        }

        var senderId = sessionStorage.getItem('UserID');
        SocketService.on(senderId, function (message) {
            console.log('Message emitted');
            if (sessionStorage.getItem('receiverID') == message.sender_id) 
            {
                if ($scope.messageData === undefined) 
                    $scope.messageData = message;
                else{ 
                    $scope.messageData.push(message); 
                }     
            }
        })

        /**
        * @description To clear input field after message is sent.
        */

        $scope.reset = function () {
            $scope.message = '';
        }

        /**
        * @description To redirect to login page
        */

        $scope.logout = function(){
            $window.location.href = 'http://localhost:3000/#!/login' 
        }
    }
    catch(err)
    {
        console.log('Error: ',err);    
    }

})