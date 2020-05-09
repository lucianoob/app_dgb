const express = require('express');
const md5 = require('md5');
const router = express.Router();
const utils = require('../../../libs/utils.js');

const Administradores = require('../../../models/Administradores');

router.get('/', function(req, res) {
	Administradores.find(null).lean().exec((error, result) => {
  	if(error) {
    		utils.log('Administradores Error', error);
    		res.json({status: 'ok', data: []});
  	} else {
    		res.json({status: 'ok', data: result});
  	}
	});
});

router.post('/', function(req, res) {
  let data = req.body;
  if(data.nome && data.email && data.senha) {
    data.senha = md5(data.senha);
  	Administradores.create(data, function (error, result) {
    	if(error) {
    		utils.log('Administradores Error', error);
    		res.json({status: 'error', data: error});
    	} else {
    		res.json({status: 'ok', data: result});
    	}
	 });
  } else {
    utils.log('Administradores Error', 'data not found!');
    res.json({status: 'error', data: null});
  }
});

router.get('/:id', function(req, res) {
  let id = req.params.id;
  Administradores.findOne({'_id': id}).lean().exec((error, result) => {
    if(error) {
        utils.log('Administradores Error', error);
        res.json({status: 'ok', data: null});
    } else {
        res.json({status: 'ok', data: result});
    }
  });
});

router.post('/:id', function(req, res) {
  let data = req.body, id = req.params.id;
  if(id && data.nome && data.email && data.senha) {
    data.senha = md5(data.senha);
    Administradores.findByIdAndUpdate(id, data, function (error, result) {
      if(error) {
        utils.log('Administradores Error', error);
        res.json({status: 'error', data: error});
      } else {
        res.json({status: 'ok', data: result});
      }
   });
  } else {
    utils.log('Administradores Error', 'data not found!');
    res.json({status: 'error', data: null});
  }
});

router.post('/delete/:id', function(req, res) {
  let id = req.params.id;
  if(id) {
    Administradores.findByIdAndRemove(id, function (error, result) {
      if(error) {
        utils.log('Administradores Error', error);
        res.json({status: 'error', data: error});
      } else {
        res.json({status: 'ok', data: result});
      }
   });
  } else {
    utils.log('Administradores Error', 'data not found!');
    res.json({status: 'error', data: null});
  }
});

module.exports = router;