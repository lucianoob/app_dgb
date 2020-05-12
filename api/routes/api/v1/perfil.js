const express = require('express');
const md5 = require('md5');
const router = express.Router();
const utils = require('../../../libs/utils.js');

const Revendedores = require('../../../models/Revendedores');

router.get('/', function(req, res) {
  let id = req.session.user ? req.session.user._id : null;
  Revendedores.findById(id).lean().exec((error, result) => {
    if(error) {
        utils.log('Revendedores Error', error);
        res.json({status: 'ok', data: null});
    } else {
        res.json({status: 'ok', data: result});
    }
  });
});

router.post('/', function(req, res) {
  let data = req.body, id = req.session.user ? req.session.user._id : null;
  if(id && data.nome) {
    if(data.senha) {
      data.senha = md5(data.senha);
    } else {
      delete data.senha;
    }
    Revendedores.findByIdAndUpdate(id, data, function (error, result) {
      if(error) {
        utils.log('Revendedores Error', error);
        res.json({status: 'error', data: error});
      } else {
        res.json({status: 'ok', data: result});
      }
   });
  } else {
    utils.log('Revendedores Error', 'data not found!');
    res.json({status: 'error', data: null});
  }
});

module.exports = router;