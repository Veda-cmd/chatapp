/**
* @description: 
* @file: server.js
* @author: Vedant Nare
* @version: 1.0
*/ 

/**
*@description Dependencies are installed for execution. 
*/

const express = require('express');
const expressValidator = require('express-validator');
// create express app
const app = express();
const server = require('http').createServer(app);
var io = require('socket.io').listen(server);
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controllers/chatController');
const route = require('./routes/routes')

//enables CORS
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(expressValidator())
app.use(express.static('../client'))

// Connecting to the socket

io.on('connection', function(client) 
{
    console.log("User connected");

    // client.on('room', function(data) {
    //     console.log(data)
    //     client.join(data.roomId);
    //     console.log(' Client joined the room and client id is '+ client.id);
    // });

    client.on('send',(message)=>
    {
        controller.sendMessage(message,(err,data)=>
        {        
            if(err) 
                return err;   
            else     
                return data;
        })    
        io.emit(String(message.receiverId),message);
    })
    io.on('disconnect', (client) => {
        console.log("socket disconnected");
    })
})

app.use('/',route)

const config = require('./config/config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database

mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    
});


// listen for requests
server.listen(config.port, () => {
    console.log("Server is listening on port 3000");
});

