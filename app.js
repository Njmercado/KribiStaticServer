const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback')

const app = express();
app.use(history())

const oneWeek = 1000*60*60*24

app.use(express.static(path.join(__dirname, 'Public'), {
    etag: false,
    maxAge: oneWeek
}));

module.exports = app;
