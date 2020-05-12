import React, { Component } from 'react';

import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLightbulb, faDollarSign, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

import './Home.css';

class Home extends Component {
  state = {
    
  }

  componentDidMount() {
  
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
                          <div className="card-header"><FontAwesomeIcon icon={faHome}/> Home</div>
                          <div className="card-body">
                          <h2>Bem vindo !</h2>
                          <hr/>
                          <div class="media">
                            <div class="media-body">
                              <h4><FontAwesomeIcon icon={faDollarSign}/> Como funciona?</h4>
                              <p>Neste sistema você poderá inserir as suas compras e com elas ganhar cahsback.</p>
                            </div>
                          </div>
                          <div class="media">
                            <div class="media-body">
                              <h4><FontAwesomeIcon icon={faLightbulb}/> Cadastrar compras</h4>
                              <p>Então não perca tempo e cadastre já as suas compras no menu 'Minhas Compras'.</p>
                            </div>
                          </div>
                          <div class="media">
                            <div class="media-body">
                              <h4><FontAwesomeIcon icon={faHandHoldingUsd}/> Ver o meu cashback</h4>
                              <p>E acompanhe o seu cashback no menu 'Meu Cashback'.</p>
                            </div>
                          </div>
                          <small>Obs.: o valor de cahsback será de acordo com o valor de vendas acumuladas no período.</small>
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

export default Home;

