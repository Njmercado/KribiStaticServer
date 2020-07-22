const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback')
const nocache = require('nocache')

const app = express();
app.use(history())

const time = 1000

app.use(nocache())
app.use(express.static(path.join(__dirname, 'Public'), { maxAge: time }));

module.exports = app;
