//The main Point of Entry for the To Do node.JS app

//Config
const config =require('./config');


//Express
const express = require('express');
const app = express();
const port = 3000;

//Start listening for connections
console.log("Listening on Port "+port+"...");
app.listen(port);

//Mongo stuff
const mongoose = require('mongoose');

// Actually connect to the database (lets use a promise)
mongoose.connect(config.getDbConnectionString(),{ useNewUrlParser: true }).then(()=> {
        console.log("Successfully connected to the database.");
    },
    err => {
        console.log("ERROR connecting to the database.");
        throw err;
    }
);

//Controller
const setupController = require('./controllers/setupController.js');

setupController(app);