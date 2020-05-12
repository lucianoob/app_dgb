import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import axios from 'axios';

import Header from '../components/Header';
import Modal from '../components/Modal';
import './Login.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

class Cadastro extends Component {
    state = {
        nome: '',
        cpf: '',
        email: '',
        senha: '',
        showModal: false,
        responseData: {}
    }

    componentDidMount() {

    }

    clickCadastro() {
        if(this.state.nome.length > 0 && this.state.cpf.length > 0 && this.state.email.length > 0 && this.state.senha.length > 0) {
            axios.post('/api/v1/cadastro', {
                nome: this.state.nome,
                cpf: this.state.cpf,
                email: this.state.email,
                senha: this.state.senha
            }).then((res) => {
                let data = res.data;
                console.log('cadastro: ', data);
                if(data.status === 'ok') {
                    window.location = '/';
                } else {
                    this.setState({ responseData: data, showModal: true });
                } 
            }).catch((error) => {
                console.log(error);
            });
        } else {
            this.setState({ responseData: {
                status: 'error',
                'data': 'Insira todos os dados para criar o cadastro!'
            }, showModal: true });
        }
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
                                            <input type="text" id="nome" className="form-control" name="nome" 
                                                onChange={(event) => this.setState({nome: event.target.value})} required autoFocus/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="cpf" className="col-md-4 col-form-label text-md-right">CPF</label>
                                        <div className="col-md-3">
                                            <InputMask mask="999.999.999-99" maskChar=" " id="cpf" className="form-control" 
                                                onChange={(event) => this.setState({cpf: event.target.value})} name="cpf" required/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right">Email</label>
                                        <div className="col-md-6">
                                            <input type="email" id="email" className="form-control" name="email" 
                                                onChange={(event) => this.setState({email: event.target.value})} required/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="senha" className="col-md-4 col-form-label text-md-right">Senha</label>
                                        <div className="col-md-3">
                                            <input type="text" id="senha" className="form-control" name="senha" 
                                                onChange={(event) => this.setState({senha: event.target.value})} required/>
                                        </div>
                                    </div>

                                    <div className="col-md-6 offset-md-4">
                                        <button type="button" className="btn btn-primary" onClick={() => this.clickCadastro()}>
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
        <Modal modal="login" dados={this.state.responseData} show={this.state.showModal} close={(show) => this.setState({showModal: show, responseData: {}})}/>
        </>
    );
  }
}

export default Cadastro;
