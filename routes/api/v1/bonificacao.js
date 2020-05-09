const express = require('express');
const router = express.Router();
const utils = require('../../../libs/utils.js');

const Bonificacao = require('../../../models/Bonificacao');

router.get('/', function(req, res) {
	Bonificacao.find(null).lean().exec((error, result) => {
  	if(error) {
    		utils.log('Bonficacao Error', error);
    		res.json({status: 'ok', data: []});
  	} else {
    		res.json({status: 'ok', data: result});
  	}
	});
});

router.post('/', function(req, res) {
  let data = req.body;
  if(data.titulo && data.valor_inicial && data.valor_final) {
  	Bonificacao.create(data, function (error, result) {
    	if(error) {
    		utils.log('Bonficacao Error', error);
    		res.json({status: 'error', data: error});
    	} else {
    		res.json({status: 'ok', data: result});
    	}
	 });
  } else {
    utils.log('Bonficacao Error', 'data not found!');
    res.json({status: 'error', data: null});
  }
});

router.get('/:id', function(req, res) {
  let id = req.params.id;
  Bonificacao.findOne({'_id': id}).lean().exec((error, result) => {
    if(error) {
        utils.log('Bonficacao Error', error);
        res.json({status: 'ok', data: null});
    } else {
        res.json({status: 'ok', data: result});
    }
  });
});

router.post('/:id', function(req, res) {
  let data = req.body, id = req.params.id;
  if(id && data.titulo && data.valor_inicial && data.valor_final) {
    Bonificacao.findByIdAndUpdate(id, data, function (error, result) {
      if(error) {
        utils.log('Bonficacao Error', error);
        res.json({status: 'error', data: error});
      } else {
        res.json({status: 'ok', data: result});
      }
   });
  } else {
    utils.log('Bonficacao Error', 'data not found!');
    res.json({status: 'error', data: null});
  }
});

router.post('/delete/:id', function(req, res) {
  let id = req.params.id;
  if(id) {
    Bonificacao.findByIdAndRemove(id, function (error, result) {
      if(error) {
        utils.log('Bonficacao Error', error);
        res.json({status: 'error', data: error});
      } else {
        res.json({status: 'ok', data: result});
      }
   });
  } else {
    utils.log('Bonficacao Error', 'data not found!');
    res.json({status: 'error', data: null});
  }
});

module.exports = router;