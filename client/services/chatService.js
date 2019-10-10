app.service('chatService', ['socketFactory', function SocketService(socketFactory) {
    return socketFactory({
        ioSocket: io.connect('http://localhost:3000/#!/dashboard')
    });

}]);

