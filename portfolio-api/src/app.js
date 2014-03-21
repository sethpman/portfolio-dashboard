var express = require('express');
var bodyParser = require('body-parser');

// app
var app = express();
app.use(bodyParser());

// cross domain stuff
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, X-Requested-With");
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

// routes
app.get('/', function(req, res) {
    res.json(200, {
        "msg": "Hello World"
    });
});

// start server
var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});