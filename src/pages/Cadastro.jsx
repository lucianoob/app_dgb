import React, { Component } from 'react';
import InputMask from 'react-input-mask';

import Header from '../components/Header';
import './Login.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

class Cadastro extends Component {
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
                            <div className="card-header"><FontAwesomeIcon icon={faUserEdit}/> Cadastro</div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group row">
                                        <label htmlFor="nome" className="col-md-4 col-form-label text-md-right">Nome Completo</label>
                                        <div className="col-md-6">
                                            <input type="text" id="nome" className="form-control" name="nome" required autoFocus/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="cpf" className="col-md-4 col-form-label text-md-right">CPF</label>
                                        <div className="col-md-3">
                                            <InputMask mask="999.999.999-99" maskChar=" " id="cpf" className="form-control" 
                                                name="cpf" required/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right">Email</label>
                                        <div className="col-md-6">
                                            <input type="email" id="email" className="form-control" name="email" required/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="senha" className="col-md-4 col-form-label text-md-right">Senha</label>
                                        <div className="col-md-3">
                                            <input type="text" id="senha" className="form-control" name="senha" required/>
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

export default Cadastro;
