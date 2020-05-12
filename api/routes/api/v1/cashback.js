const express = require('express');
const axios = require('axios');

const router = express.Router();
const utils = require('../../../libs/utils.js');
const configs = require('../../../libs/configs.js');

const Bonificacao = require('../../../models/Bonificacao');

router.get('/', function (req, res) {
  let user = req.session.user;
  if(user.cpf) {
    axios.get(configs.token_external_url+'?cpf='+user.cpf, {
      headers: {
        'Authorization': `Basic ${configs.token_external_api}`
      }
    }).then(async (response) => {
        let data = response.data;
        if(data.statusCode === 200) {
          let bonificacoes = await Bonificacao.find();
          let cashback = null;
          let bonificacao = null;
          let credit = data.body.credit;
          bonificacoes.forEach((item) => {
            item.valor_final = item.valor_final === 0 ? 999999999 : item.valor_final;
            if(credit >= item.valor_inicial && credit < item.valor_final) {
              cashback = (item.cashback/100)*credit;
              bonificacao = item;
            }
          });
          res.json({status: 'ok', data: {
            credit: credit,
            bonificacao: bonificacao,
            cashback: cashback
          }});
        } else {
          res.json({status: 'error', data: data});
        }
    }).catch((error) => {
        utils.log('Cashback Error', error);
        res.json({status: 'error', data: error});
    });
  } else {
    utils.log('Cashback Error', 'data not found!');
    res.json({status: 'error', data: null});
  }
});

module.exports = router;