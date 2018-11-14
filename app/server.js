var express = require('express');
var timesyncServer = require('../server');

var PORT = 80;

// create an express app
var app = express();
app.listen(PORT);
console.log('Server listening at http://localhost:' + PORT);

// serve static index.html
app.get('/', express.static(__dirname));
app.get('/index.html', express.static(__dirname));


var publicDir = require('path').join(__dirname);
app.use(express.static(publicDir));
console.log(publicDir);

// handle timesync requests
app.use('/timesync', timesyncServer.requestHandler);
