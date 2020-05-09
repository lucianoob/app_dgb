const express = require('express');
const router = express();

const login = require('./login');
const logged = require('./logged');
const logout = require('./logout');

const administradores = require('./administradores');
const bonificacao = require('./bonificacao');
const revendedores = require('./revendedores');
const compras = require('./compras');

router.use('/login', login);
router.use('/logout', logout);
router.use('/administradores', logged, administradores);
router.use('/bonificacao', logged, bonificacao);
router.use('/revendedores', logged, revendedores);
router.use('/compras', logged, compras);

module.exports = router;