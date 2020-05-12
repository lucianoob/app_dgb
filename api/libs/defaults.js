const md5 = require('md5');

const Administradores = require('../models/Administradores');
const Bonificacao = require('../models/Bonificacao');
const Revendedores = require('../models/Revendedores');

const AdministradoresDefaultPath = '../models/Administradores/default.json';
const BonificacaoDefaultPath = '../models/Bonificacao/default.json';
const RevendedoresDefaultPath = '../models/Revendedores/default.json';

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

module.exports.revendedores = async function () { 
	delete require.cache[require.resolve(RevendedoresDefaultPath)];
  	RevendedoresDefault = require(require.resolve(RevendedoresDefaultPath));
	RevendedoresDefault.forEach(async (revendedores_default) => {
		let data = await Revendedores.findOne({ cpf: revendedores_default.cpf });
		if(!data) {
			revendedores_default.senha = md5(revendedores_default.senha);
		  	await Revendedores.create(revendedores_default);
		}
	});
};