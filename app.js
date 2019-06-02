var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'Public')));

module.exports = app;
