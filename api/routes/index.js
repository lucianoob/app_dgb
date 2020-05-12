const path = require('path');
const express = require('express');
const router = express();

router.all('/*', function(req, res, next) {
	res.sendFile('index.html', {root: path.join(__dirname, '/../../build/')});
});

module.exports = router;