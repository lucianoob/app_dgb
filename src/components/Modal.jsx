import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import './Modal.css';

class Modal extends Component {
    state = {
        show: false
    }

    componentDidUpdate(prevProps, prevState, _snapshot) {
        if(prevProps.show !== this.props.show) {
            this.setState({show: this.props.show});
        }
    }

    clickClose() {
        this.setState({show: false});
        this.props.close(false);
    }

    render() {
        return (
            <div id={'modal-'+(this.props.modal ? this.props.modal : 'mensagem')} className="modal" tabIndex="-1" role="dialog" style={this.state.show ? {display: 'block'} : {display: 'none'}}>
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header" style={this.props.dados.status === 'error' ? {backgroundColor: 'red'} : {backgroundColor: 'black'}}>
                    <h5 className="modal-title">
                        <FontAwesomeIcon icon={this.props.dados.status === 'error' ? faExclamationTriangle : faExclamationCircle}/> {this.props.dados.status === 'error' ? 'ERRO' : 'AVISO'}
                    </h5>
                    <button type="button" className="close" aria-label="Close" onClick={() => this.clickClose()}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>{typeof this.props.dados.data === 'object' ? JSON.stringify(this.props.dados.data) : this.props.dados.data}</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => this.clickClose()}>Ok</button>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Modal;
