var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello NW.js!');
});

app.listen(3838, function () {
  console.log('Game Show App Server running on http://localhost:3838');
});