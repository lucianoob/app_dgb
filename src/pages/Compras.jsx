import React, { Component } from 'react';

import Header from '../components/Header';
import './Compras.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class Compras extends Component {
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
                            <div className="card-header"><FontAwesomeIcon icon={faShoppingCart}/> Compras</div>
                            <div className="card-body">
                                <table class="table table-striped">
                                  <thead>
                                    <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">Código</th>
                                      <th scope="col">Data</th>
                                      <th scope="col">Valor</th>
                                      <th scope="col">Status</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row">1</th>
                                      <td>AFDRSD12UF</td>
                                      <td>12/01/2020</td>
                                      <td>R$ 320,15</td>
                                      <td>Em Aprovação</td>
                                    </tr>
                                  </tbody>
                                </table>
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

export default Compras;
