const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const conn_session = require('connect-mongo')(session);

const utils = require('./libs/utils.js');
const configs = require('./libs/configs.js');
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
defaults.revendedores();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/assets', express.static(path.join(__dirname, '/../build/assets')));
app.use('/static', express.static(path.join(__dirname, '/../build/static')));

app.use(session({
	secret: configs.session_secret,
	store: new conn_session({
		url: configs.mongo_server_url+configs.mongo_server_db,
		ttl: configs.expires_date
	}),
	proxy: true,
	resave: true,
	saveUninitialized: true
}));

app.use('/api/v1', api);
app.use('/*', routes);

const server = app.listen(8000);

utils.log('Server', 'initializing server...');

module.exports = server;