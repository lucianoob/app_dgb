const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaOpts = {};

const schemaObj = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  created: { type: Date, default: Date.now },
  modified: { type: Date, default: Date.now }
}, schemaOpts);

schemaObj.set('toJSON', { getters: true, virtuals: true });
schemaObj.set('toObject', { getters: true, virtuals: true });

module.exports = exports = mongoose.model('administradores', schemaObj);
