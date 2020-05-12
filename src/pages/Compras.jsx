import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import NumberFormat from 'react-number-format';

import Header from '../components/Header';
import './Compras.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPenSquare } from '@fortawesome/free-solid-svg-icons';

class Compras extends Component {
  state = {
    compras: []
  }

  componentDidMount() {
    axios.get('/api/v1/compras').then((res) => {
      let ret = res.data;
      console.log('compras: ', ret);
      this.setState({compras: ret.data}); 
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
                            <div className="card-header"><FontAwesomeIcon icon={faShoppingCart}/> Compras</div>
                            <div className="card-body">
                                <table className="table table-striped">
                                  <thead>
                                    <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">Código</th>
                                      <th scope="col">Data</th>
                                      <th scope="col">Valor</th>
                                      <th scope="col">Status</th>
                                      <th scope="col"></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    { this.state.compras.map((item, index) =>
                                        <tr key={index}>
                                          <th scope="row">{index}</th>
                                          <td>{item.codigo}</td>
                                          <td>{moment(item.data).format('DD/MM/YYYY')}</td>
                                          <td><NumberFormat value={item.valor} displayType={'text'} decimalSeparator="," thousandSeparator="." prefix={'R$ '} /></td>
                                          <td>{item.status}</td>
                                          <td>
                                            { item.status === 'Em validação' &&
                                                <button type="button" className="btn btn-secondary" onClick={() => window.location = '/compra/'+item._id}>
                                                    <FontAwesomeIcon icon={faPenSquare}/>
                                                </button>
                                            }
                                          </td>
                                        </tr>
                                    )}
                                  </tbody>
                                </table>
                            </div>
                            <div className="card-footer">
                              <button type="button" className="btn btn-primary" onClick={() => window.location = '/compra'}>
                                  Nova Compra
                              </button>
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
