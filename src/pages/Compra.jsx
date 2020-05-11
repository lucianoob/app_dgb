import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';

import Header from '../components/Header';
import './Compra.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class Compra extends Component {
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
                                <div className="card-header"><FontAwesomeIcon icon={faShoppingCart}/> Compra</div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group row">
                                            <label htmlFor="codigo" className="col-md-4 col-form-label text-md-right">Código</label>
                                            <div className="col-md-6">
                                                <input type="text" id="codigo" className="form-control" name="codigo" required autoFocus/>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="data" className="col-md-4 col-form-label text-md-right">Data</label>
                                            <div className="col-md-3">
                                                <input type="date" id="data" className="form-control" name="data" required/>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="valor" className="col-md-4 col-form-label text-md-right">Valor</label>
                                            <div className="col-md-3">
                                                <CurrencyInput prefix="R$ " decimalSeparator="," thousandSeparator="." 
                                                    id="valor" className="form-control" name="valor" required/>
                                            </div>
                                        </div>

                                        <div className="col-md-6 offset-md-4">
                                            <button type="submit" className="btn btn-primary">
                                                Salvar
                                            </button>
                                        </div>
                                    </form>
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

export default Compra;
