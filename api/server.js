const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require("cors");


const utils = require('./libs/utils.js');
const defaults = require('./libs/defaults.js');
const app = express();
const routes = require('./routes/');
const api = require('./routes/api/v1');
const db = require('./db.js');

db(false);

require("dotenv-safe").config();
app.use(cors());

defaults.administradores();
defaults.bonificacao();

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/v1', api);
app.use('/', routes);

const server = app.listen(8000);

utils.log('Server', 'initializing server...');

module.exports = server;