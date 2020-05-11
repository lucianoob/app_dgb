const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
	res.clearCookie('token');
  	res.send({ status: 'ok', data: '', token: null });
});

module.exports = router;