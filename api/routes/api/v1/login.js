const express = require('express');
const jwt = require('jsonwebtoken');
const md5 = require('md5');

const router = express.Router();
const utils = require('../../../libs/utils.js');
const configs = require('../../../libs/configs.js');

const Administradores = require('../../../models/Administradores');
const Revendedores = require('../../../models/Revendedores');

router.post('/', async (req, res, next) => {
	let usuario = req.body.usuario, senha = req.body.senha ? md5(req.body.senha) : null;
	let administrador = await Administradores.findOne({email: usuario, senha: senha });
	let revendedor = await Revendedores.findOne({ $or: [{email: usuario}, {cpf: usuario}], senha: senha });
	if(administrador || revendedor){
	  	const id = (administrador ? administrador._id.toString() : null) || (revendedor ? revendedor._id.toString() : null);
	  	console.log(id);
	  	let token = jwt.sign({ id }, process.env.SECRET, {
    		expiresIn: configs.expires_date
	  	});
	  	req.session.user = (administrador ? administrador : null) || (revendedor ? revendedor : null);
	  	res.cookie("token", token, { maxAge: configs.expires_date * 1000 });
		return res.json({status: 'ok', data: 'Login realizado!', token: token});
	} else {
		return res.json({status: 'error', data:'Login inválido!', token: null});
	}
});

module.exports = router;