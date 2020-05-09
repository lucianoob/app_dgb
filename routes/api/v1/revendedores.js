const express = require('express');
const md5 = require('md5');
const router = express.Router();
const utils = require('../../../libs/utils.js');

const Revendedores = require('../../../models/Revendedores');

router.get('/', function(req, res) {
	Revendedores.find(null).lean().exec((error, result) => {
  	if(error) {
    		utils.log('Revendedores Error', error);
    		res.json({status: 'ok', data: []});
  	} else {
    		res.json({status: 'ok', data: result});
  	}
	});
});

router.post('/', function(req, res) {
  let data = req.body;
  if(data.nome && data.cpf && data.email && data.senha) {
    data.senha = md5(data.senha);
  	Revendedores.create(data, function (error, result) {
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

router.get('/:query', function(req, res) {
  let query = !/\D/.test(req.params.query) ? {cpf: req.params.query} : {'_id': req.params.query};
  Revendedores.findOne(query).lean().exec((error, result) => {
    if(error) {
        utils.log('Revendedores Error', error);
        res.json({status: 'ok', data: null});
    } else {
        res.json({status: 'ok', data: result});
    }
  });
});

router.post('/:id', function(req, res) {
  let data = req.body, id = req.params.id;
  if(id && data.nome && data.cpf && data.email && data.senha) {
    data.senha = md5(data.senha);
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

router.post('/delete/:id', function(req, res) {
  let id = req.params.id;
  if(id) {
    Revendedores.findByIdAndRemove(id, function (error, result) {
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