const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaOpts = {};

const schemaObj = new Schema({
  revendedor: { type: String, required: true },
  codigo: { type: String, required: true },
  valor: { type: Number, required: true },
  data: { type: Date, required: true },
  status: { type: String, default: 'Em validação' },
  created: { type: Date, default: Date.now },
  modified: { type: Date, default: Date.now }
}, schemaOpts);

schemaObj.set('toJSON', { getters: true, virtuals: true });
schemaObj.set('toObject', { getters: true, virtuals: true });

module.exports = exports = mongoose.model('compras', schemaObj);
