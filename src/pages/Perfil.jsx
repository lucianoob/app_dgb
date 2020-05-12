import React, { Component } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Modal from '../components/Modal';
import './Login.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

class Perfil extends Component {
    state = {
        perfil: {},
        nome: '',
        senha: '',
        showModal: false,
        responseData: {},
        save_ok: null
    }

    componentDidMount() {
        axios.get('/api/v1/perfil').then((res) => {
            let ret = res.data;
            console.log('perfil: ', ret);
            this.setState({perfil: ret.data, nome: ret.data.nome});
        }).catch((error) => {
            console.log(error);
        });
    }

    clickCadastro() {
        if(this.state.nome.length > 0) {
            this.setState({save_ok: null});
            axios.post('/api/v1/perfil', {
                nome: this.state.nome,
                senha: this.state.senha
            }).then((res) => {
                let ret = res.data;
                console.log('perfil: ', ret);
                if(ret.status === 'ok') {
                    this.setState({save_ok: 'ok'});
                } else {
                    this.setState({ responseData: ret, showModal: true });
                } 
            }).catch((error) => {
                console.log(error);
            });
        } else {
            this.setState({ responseData: {
                status: 'error',
                'data': 'Insira todos os dados para alterar o perfil!'
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
                                            <input type="text" id="nome" className="form-control" name="nome" defaultValue={this.state.perfil.nome}
                                                onChange={(event) => this.setState({nome: event.target.value})} required autoFocus/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="cpf" className="col-md-4 col-form-label text-md-right">CPF</label>
                                        <div className="col-md-3">
                                            <input type="text" name="cpf" id="cpf" className="form-control" 
                                                 defaultValue={this.state.perfil.cpf}  disabled={true}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right">Email</label>
                                        <div className="col-md-6">
                                            <input type="email" id="email" className="form-control" name="email" 
                                                 defaultValue={this.state.perfil.email} disabled={true}/>
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
                                        <small>Obs.: deixe em branco caso não queira alterar a senha.</small><br/><br/>
                                        <button type="button" className="btn btn-primary" onClick={() => this.clickCadastro()}>
                                            Salvar
                                        </button>
                                    </div>
                                </form>
                            </div>
                            { this.state.save_ok === 'ok' &&
                                <div className="card-footer alert-success text-center">
                                  O perfil foi atualizado com sucesso!
                                </div>
                            }
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

export default Perfil;
