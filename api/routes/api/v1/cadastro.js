const express = require('express');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const CPF = require('cpf');
const emailValidator = require('email-validator');

const router = express.Router();
const utils = require('../../../libs/utils.js');
const configs = require('../../../libs/configs.js');

const Revendedores = require('../../../models/Revendedores');

router.post('/', function(req, res) {
  let data = req.body;
  if(data.nome && data.cpf && data.email && data.senha) {
    if(!CPF.isValid(data.cpf)) {
      res.json({status: 'error', data: "CPF inválido!"});
    } else if(!emailValidator.validate(data.email)) {
      res.json({status: 'error', data: "Email inválido!"});
    } else {
      data.cpf = data.cpf.replace(/\D+/g, '');
      Revendedores.find({$or: [{cpf: data.cpf},{email: data.email}]}, function (error, result) {
        if(error) {
            utils.log('Revendedores Error', error);
            res.json({status: 'error', data: error});
        } else if(result.length > 0){
          res.json({status: 'error', data: "CPF e/ou email já cadastrado!"});
        } else {
          data.senha = md5(data.senha);
        	Revendedores.create(data, function (error, result) {
          	if(error) {
          		utils.log('Revendedores Error', error);
          		res.json({status: 'error', data: error});
          	} else {
              let id = result._id;
              let token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: configs.expires_date
              });
              req.session.user = result;
              res.cookie("token", token, { maxAge: configs.expires_date * 1000 });
          		res.json({status: 'ok', data: result});
          	}
      	  });
        }
     });
    }
  } else {
    utils.log('Revendedores Error', 'data not found!');
    res.json({status: 'error', data: null});
  }
});

module.exports = router;