const express = require('express');
const router = express.Router();
const utils = require('../../../libs/utils.js');

const Revendedores = require('../../../models/Revendedores');
const Compras = require('../../../models/Compras');

const revendedor_master = '15350946056';

router.get('/', function(req, res) {
  let query = req.query.revendedor ? {revendedor: req.query.revendedor} : null;
	Compras.find(query).lean().exec((error, result) => {
  	if(error) {
    		utils.log('Compras Error', error);
    		res.json({status: 'ok', data: []});
  	} else {
    		res.json({status: 'ok', data: result});
  	}
	});
});

router.post('/', async function(req, res) {
  let data = req.body;
  if(data.revendedor && data.codigo && data.valor && data.data) {
    if(data.revendedor === revendedor_master) {
      data.status = 'Aprovado';
    }
  	Compras.create(data, function (error, result) {
    	if(error) {
    		utils.log('Compras Error', error);
    		res.json({status: 'error', data: error});
    	} else {
    		res.json({status: 'ok', data: result});
    	}
	 });
  } else {
    utils.log('Compras Error', 'data not found!');
    res.json({status: 'error', data: null});
  }
});

router.get('/:query', function(req, res) {
  if(!/\D/.test(req.params.query)){
    Compras.find({revendedor: req.params.query}).lean().exec((error, result) => {
      if(error) {
          utils.log('Compras Error', error);
          res.json({status: 'ok', data: null});
      } else {
          res.json({status: 'ok', data: result});
      }
    });
  } else {
    Compras.findOne({'_id': req.params.query}).lean().exec((error, result) => {
      if(error) {
          utils.log('Compras Error', error);
          res.json({status: 'ok', data: null});
      } else {
          res.json({status: 'ok', data: result});
      }
    });
  }
});

router.post('/:id', function(req, res) {
  let data = req.body, id = req.params.id;
  if(id && data.revendedor && data.codigo && data.valor && data.data) {
    Compras.findByIdAndUpdate(id, data, function (error, result) {
      if(error) {
        utils.log('Compras Error', error);
        res.json({status: 'error', data: error});
      } else {
        res.json({status: 'ok', data: result});
      }
   });
  } else {
    utils.log('Compras Error', 'data not found!');
    res.json({status: 'error', data: null});
  }
});

router.post('/delete/:id', function(req, res) {
  let id = req.params.id;
  if(id) {
    Compras.findByIdAndRemove(id, function (error, result) {
      if(error) {
        utils.log('Compras Error', error);
        res.json({status: 'error', data: error});
      } else {
        res.json({status: 'ok', data: result});
      }
   });
  } else {
    utils.log('Compras Error', 'data not found!');
    res.json({status: 'error', data: null});
  }
});

module.exports = router;