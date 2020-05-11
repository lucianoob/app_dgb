import React, { Component } from 'react';

import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import './Home.css';

class Home extends Component {
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
                          <div className="card-header"><FontAwesomeIcon icon={faHome}/> Home</div>
                          <div className="card-body">
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

export default Home;

