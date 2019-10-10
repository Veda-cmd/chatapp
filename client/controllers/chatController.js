app.controller('chatController', function($scope,chatService,userService) 
{
    $scope.array = [];
    $scope.message = {};
    $scope.getUser = (item) =>
    {
        localStorage.setItem('receiverID',item._id);
        localStorage.setItem('receiverName',item.firstName);
        $scope.username = item.firstName;
    }

    chatService.emit('room', { roomId: $scope.id});

    userService.getAllUsers().
    then(res=>
        {
            $scope.users = res.data;
        })
    .catch(err=>
        {
            console.log(err);
        });
    
    let senderName = localStorage.getItem('Username'),
        senderId = localStorage.getItem('UserID'),
        receiverName = localStorage.getItem('receiverName'),
        receiverId = localStorage.getItem('receiverID');
       
    console.log(receiverName);    
    $scope.add = function() {
        chatService.emit('toBackEnd', {roomId:'temp',sender_Id:senderId,receiver_Id:receiverId,sender:senderName,receiver:receiverName, data: $scope.message, date: new Date() })
        $scope.array.push({ data: $scope.message, date: new Date() })
    }

    chatService.on('message', function(msg) {
        console.log(msg);
        $scope.array.push(msg);
    });

})