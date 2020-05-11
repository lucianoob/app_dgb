const express = require('express');

const router = express.Router();

const packages_backend = require('../../../package.json');
const packages_frontend = require('../../../../package.json');

router.get('/', function(req, res) {
  	res.send({ status: 'ok', data: {backend: packages_backend, frontend: packages_frontend} });
});

module.exports = router;