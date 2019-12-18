var express = require('express');
var timesyncServer = require('../server');

var PORT = process.env.PORT || 3000;

var checkStatus = true; 

// create an express app
var app = express();
app.listen(PORT);
console.log('Server listening at http://localhost:' + PORT);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// serve static pages
app.get('/', express.static(__dirname));


app.get('/getStatus', (req, res) => {
    return res.send({checkStatus});
});

var publicDir = require('path').join(__dirname);
app.use(express.static(publicDir));
console.log(publicDir);

// handle timesync requests
app.use('/timesync', timesyncServer.requestHandler);
