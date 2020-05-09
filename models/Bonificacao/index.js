const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaOpts = {};

const schemaObj = new Schema({
  titulo: { type: String, required: true },
  valor_inicial: { type: Number, required: true },
  valor_final: { type: Number, required: true },
  created: { type: Date, default: Date.now },
  modified: { type: Date, default: Date.now }
}, schemaOpts);

schemaObj.set('toJSON', { getters: true, virtuals: true });
schemaObj.set('toObject', { getters: true, virtuals: true });

module.exports = exports = mongoose.model('bonificacao', schemaObj);
