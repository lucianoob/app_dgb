import React, { Component } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';

import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

import './Cashback.css';

class Cashback extends Component {
  state = {
    cashback: {},
    loading: true
  }

  componentDidMount() {
    axios.get('/api/v1/cashback').then((res) => {
        let ret = res.data;
        console.log('cashback: ', ret);
        this.setState({cashback: ret.data, loading: false});
    }).catch((error) => {
        console.log(error);
    });
  }
  
  render() {
    return (
      <>
      <Header />
      <main className="app-form">
            <div className="cotainer">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                          <div className="card-header"><FontAwesomeIcon icon={faMoneyBillWave}/> Cashback</div>
                          <div className="card-body text-center">
                            { this.state.loading ?
                                <p>Carregando...</p>
                              :
                                <>
                                <h3><b>Valor Acumulado (Compras)</b></h3>
                                <h4><NumberFormat value={this.state.cashback.credit} displayType={'text'} decimalSeparator="," thousandSeparator="." prefix={'R$ '} decimalScale="2" fixedDecimalScale={true}/></h4>
                                <hr/>
                                <h3><b>Cashback Acumulado:</b></h3> 
                                <h4><NumberFormat value={this.state.cashback.cashback} displayType={'text'} decimalSeparator="," thousandSeparator="." prefix={'R$ '} decimalScale="2" fixedDecimalScale={true}/></h4>
                                <hr/>
                                <h3><b>Faixa de Bonificação:</b></h3> 
                                <h4>{this.state.cashback.bonificacao ? this.state.cashback.bonificacao.titulo : ''}</h4>
                                </>
                            }
                          </div>
                        </div>
                    </div>
                </div>
            </div>
      </main>
      </>
    );
  }
}

export default Cashback;

