const express = require('express');
const bodyParser = require('body-parser');

const utils = require('./libs/utils.js');
const app = express();
const api = require('./routes/api/v1');
const db = require('./db.js');

db(false);

app.use(bodyParser.urlencoded({ extended: true }));

app.all('/', function(req, res, next) {
  res.send('App init!');
});

app.use('/api/v1', api);

const server = app.listen(8000);

utils.log('Server', 'initializing server...');

module.exports = server;