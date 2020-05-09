const packages = require('../package.json');

module.exports.log = function (title, msg) { 
	console.log('['+packages.name+' v'+packages.version+'] ('+(new Date().toLocaleString('pt-BR'))+') | '+title+': ', msg);
}