import React,  { Component } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserEdit, faShoppingCart, faMoneyBillWave, faUserCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import './Header.css';
import { getCookie } from '../libs/cookies.js';

import Modal from './Modal';

class Header extends Component {
    state = {
        showModal: false,
        responseData: {}
    }

    componentDidMount() {}

    clickLogoff(event) {
        event.preventDefault();
        axios.get('/api/v1/logout').then((res) => {
            let data = res.data;
            console.log('logout: ', data);
            if(data.status === 'ok') {
                window.location = '/';
            } else {
                this.setState({ responseData: data, showModal: true });
            } 
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
      return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light navbar-header">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <img className="logo" src="/assets/images/icon.png" alt="App DGB"/>App DGB
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        { getCookie('token') ?
                            <>
                            <li className="nav-item">
                                <a className="nav-link" href="/cadastro"><FontAwesomeIcon icon={faUserEdit}/> Meu Cadastro</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cashback"><FontAwesomeIcon icon={faMoneyBillWave}/> Meu Cashback</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/compras"><FontAwesomeIcon icon={faShoppingCart}/> Minhas Compras</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" onClick={(event) => this.clickLogoff(event)} ><FontAwesomeIcon icon={faSignOutAlt}/> Sair</a>
                            </li>
                            </>
                        :
                            <>
                            <li className="nav-item">
                                <a className="nav-link" href="/cadastro"><FontAwesomeIcon icon={faUserEdit}/> Cadastro</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login"><FontAwesomeIcon icon={faSignInAlt}/> Login</a>
                            </li>
                            </>
                        }
                        <li className="nav-item">
                            <a className="nav-link" href="/sobre"><FontAwesomeIcon icon={faUserCog}/> Sobre</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
        <Modal modal="login" dados={this.state.responseData} show={this.state.showModal} close={(show) => this.setState({showModal: show, responseData: {}})}/>
        </>
      );
    }
}

export default Header;
