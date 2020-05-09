const express = require('express');
const router = express();

const administradores = require('./administradores');
const bonificacao = require('./bonificacao');
const revendedores = require('./revendedores');
const compras = require('./compras');

router.use('/administradores', administradores);
router.use('/bonificacao', bonificacao);
router.use('/revendedores', revendedores);
router.use('/compras', compras);

module.exports = router;