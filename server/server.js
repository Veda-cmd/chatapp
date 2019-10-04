const express = require('express');
const expressValidator = require('express-validator');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// create express app
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
app.use('/',route)

const dbConfig = require('../server/config/databaseConfig');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to User Interface"});
});


// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

