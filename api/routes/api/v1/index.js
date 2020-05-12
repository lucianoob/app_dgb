const express = require('express');
const router = express();

const login = require('./login');
const logged = require('./logged');
const logout = require('./logout');
const cadastro = require('./cadastro');

const administradores = require('./administradores');
const bonificacao = require('./bonificacao');
const revendedores = require('./revendedores');
const compras = require('./compras');
const cashback = require('./cashback');
const perfil = require('./perfil');
const sobre = require('./sobre');

router.use('/login', login);
router.use('/logged', logged);
router.use('/logout', logout);
router.use('/cadastro', cadastro);
router.use('/administradores', logged, administradores);
router.use('/bonificacao', logged, bonificacao);
router.use('/revendedores', logged, revendedores);
router.use('/compras', logged, compras);
router.use('/cashback', logged, cashback);
router.use('/perfil', logged, perfil);
router.use('/sobre', sobre);

router.all('/', function(req, res, next) {
	res.send('App init!');
});

module.exports = router;