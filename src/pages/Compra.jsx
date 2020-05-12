import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import axios from 'axios';
import moment from 'moment';

import Header from '../components/Header';
import Modal from '../components/Modal';
import './Compra.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class Compra extends Component {
    state = {
        codigo: '',
        data: '',
        valor: 0,
        showModal: false,
        responseData: {}
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        if(params.id) {
            axios.get('/api/v1/compras/'+params.id).then((res) => {
                let ret = res.data;
                console.log('compra: ', ret);
                this.setState({
                    codigo: ret.data.codigo,
                    data: moment(ret.data.data).format('YYYY-MM-DD'),
                    valor: ret.data.valor.toString().replace('.', ',')
                }); 
            }).catch((error) => {
              console.log(error);
            });
        }
    }

    clickSalvar() {
        if(this.state.codigo.length > 0 && this.state.data.length > 0 && this.state.valor > 0) {
            axios.post('/api/v1/compras', {
                codigo: this.state.codigo,
                data: this.state.data,
                valor: this.state.valor
            }).then((res) => {
                let data = res.data;
                console.log('compras: ', data);
                if(data.status === 'ok') {
                    window.location = '/compras';
                } else {
                    this.setState({ responseData: data, showModal: true });
                } 
            }).catch((error) => {
                console.log(error);
            });
        } else {
            this.setState({ responseData: {
                status: 'error',
                'data': 'Insira todos os dados da compra!'
            }, showModal: true });
        }
    }

    handleChange(event, maskedvalue, floatvalue){
        this.setState({valor: floatvalue});
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
                                            <div className="col-md-2">
                                                <input type="text" id="codigo" className="form-control" name="codigo" 
                                                    onChange={(event) => this.setState({codigo: event.target.value})} 
                                                    defaultValue={this.state.codigo} required autoFocus/>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="data" className="col-md-4 col-form-label text-md-right">Data</label>
                                            <div className="col-md-3">
                                                <input type="date" id="data" className="form-control" name="data" max={moment().format('YYYY-MM-DD')}
                                                    onChange={(event) => this.setState({data: event.target.value})} 
                                                    defaultValue={this.state.data} required/>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="valor" className="col-md-4 col-form-label text-md-right">Valor</label>
                                            <div className="col-md-3">
                                                <NumberFormat prefix="R$ " decimalSeparator="," thousandSeparator="." decimalScale="2" allowNegative={false}
                                                    id="valor" className="form-control" name="valor" fixedDecimalScale={true}
                                                    onValueChange={(object) => this.setState({valor: object.value})}
                                                    defaultValue={this.state.valor} required/>
                                            </div>
                                        </div>

                                        <div className="col-md-6 offset-md-4">
                                            <button type="button" className="btn btn-primary" onClick={() => this.clickSalvar()}>
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

export default Compra;
