const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;