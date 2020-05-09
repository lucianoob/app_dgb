const md5 = require('md5');

const Administradores = require('../models/Administradores');
const Bonificacao = require('../models/Bonificacao');

const AdministradoresDefaultPath = '../models/Administradores/default.json';
const BonificacaoDefaultPath = '../models/Bonificacao/default.json';

module.exports.administradores = async function () { 
	delete require.cache[require.resolve(AdministradoresDefaultPath)];
  	AdministradoresDefault = require(require.resolve(AdministradoresDefaultPath));
	AdministradoresDefault.forEach(async (administradores_default) => {
		let data = await Administradores.findOne({ email: administradores_default.email });
		if(!data) {
			administradores_default.senha = md5(administradores_default.senha);
		  	await Administradores.create(administradores_default);
		}
	});
};

module.exports.bonificacao = async function () { 
	delete require.cache[require.resolve(BonificacaoDefaultPath)];
  	BonificacaoDefault = require(require.resolve(BonificacaoDefaultPath));
	BonificacaoDefault.forEach(async (bonificacao_default) => {
		let data = await Bonificacao.findOne({ titulo: bonificacao_default.titulo, cashback: bonificacao_default.cashback });
		if(!data) {
		  	await Bonificacao.create(bonificacao_default);
		}
	});
};