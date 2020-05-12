import React, { Component } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';

import './Sobre.css';

class Sobre extends Component {
  state = {
    sobre: {
      frontend: {},
      backend: {}
    }
  }

  componentDidMount() {
    axios.get('/api/v1/sobre').then((res) => {
        let data = res.data;
        console.log('sobre: ', data);
        if(data.status === 'ok') {
            this.setState({sobre: data.data});
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
      <Header />
      <main className="app-form">
            <div className="cotainer">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                          <div className="card-header"><FontAwesomeIcon icon={faUserCog}/> Sobre</div>
                          <div className="card-body">
                            <h4><b>App DBG ({this.state.sobre.frontend.name}) v{this.state.sobre.frontend.version}</b></h4>
                            <p>{this.state.sobre.frontend.description}</p>
                            <hr/>
                            <p><b>desenvolvedor:</b> {this.state.sobre.frontend.author ? this.state.sobre.frontend.author.name : ''}</p>
                            <p><b>contato:</b> {this.state.sobre.frontend.author ? this.state.sobre.frontend.author.email : ''}</p>
                            <p><b>website:</b> <a href={this.state.sobre.frontend.author ? this.state.sobre.frontend.author.url : ''}>{this.state.sobre.frontend.author ? this.state.sobre.frontend.author.url : ''}</a></p>
                            <hr/>
                            { this.state.sobre.frontend.dependencies &&
                              <>
                              <h5><b>Frontend Libs</b></h5>
                              { Object.keys(this.state.sobre.frontend.dependencies).map((item) =>
                                  <p>
                                    <a href={'https://www.npmjs.com/package/'+item} target="_blank" rel="noopener noreferrer">
                                      <b>{item} v{this.state.sobre.frontend.dependencies[item]}</b>
                                    </a>
                                  </p>
                              )}
                              </>
                            }
                            <hr/>
                            { this.state.sobre.backend.dependencies &&
                              <>
                              <h5><b>Backend Libs</b></h5>
                              { Object.keys(this.state.sobre.backend.dependencies).map((item) =>
                                  <p>
                                    <a href={'https://www.npmjs.com/package/'+item} target="_blank" rel="noopener noreferrer">
                                      <b>{item} v{this.state.sobre.backend.dependencies[item]}</b>
                                    </a>
                                  </p>
                              )}
                              </>
                            }
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

export default Sobre;

