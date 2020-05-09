const express = require('express');
const jwt = require('jsonwebtoken');
const md5 = require('md5');

const router = express.Router();
const utils = require('../../../libs/utils.js');

const Administradores = require('../../../models/Administradores');
const Revendedores = require('../../../models/Revendedores');
const expires_date = 60;

router.post('/', async (req, res, next) => {
	let administrador = await Administradores.findOne({ email: req.body.usuario, senha: md5(req.body.senha) });
	let revendedor = await Revendedores.findOne({ email: req.body.usuario, senha: md5(req.body.senha) });
	if(administrador || revendedor){
    	const id = administrador._id || revendedor._id;
    	console.log("id", id);
    	let token = jwt.sign({ id }, process.env.SECRET, {
      		expiresIn: expires_date
    	});
    	res.cookie("token", token, { maxAge: expires_date * 1000 });
		return res.status(200).json({status: 'ok', data: 'Login realizado!'});
  	} else {
  		return res.status(500).json({status: 'error', data:'Login inválido!'});
  	}
});

module.exports = router;