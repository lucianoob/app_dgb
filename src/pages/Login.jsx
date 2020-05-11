import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Modal from '../components/Modal';
import './Login.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

class Login extends Component {
    state = {
        usuario: '',
        senha: '',
        showModal: false,
        responseData: {}
    }

    componentDidMount() {}

    clickLogin() {
        if(this.state.usuario.length > 0 && this.state.senha.length > 0) {
            axios.post('/api/v1/login', {
                usuario: this.state.usuario,
                senha: this.state.senha
            }).then((res) => {
                let data = res.data;
                console.log('login: ', data);
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
                'data': 'Insira o email e senha para realizar o login!'
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
                                <div className="card-header"><FontAwesomeIcon icon={faSignInAlt}/> Login</div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group row">
                                            <label htmlFor="usuario" className="col-md-4 col-form-label text-md-right">Email</label>
                                            <div className="col-md-6">
                                                <input type="email" id="usuario" className="form-control" name="usuario" 
                                                    onChange={(event) => this.setState({usuario: event.target.value})} required autoFocus/>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="senha" className="col-md-4 col-form-label text-md-right">Senha</label>
                                            <div className="col-md-6">
                                                <input type="password" id="senha" className="form-control" name="senha" 
                                                    onChange={(event) => this.setState({senha: event.target.value})} required/>
                                            </div>
                                        </div>

                                        <div className="col-md-6 offset-md-4">
                                            <button type="button" className="btn btn-primary" onClick={() => this.clickLogin()}>
                                                Entrar
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

export default Login;
