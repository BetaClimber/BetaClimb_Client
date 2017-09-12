import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';

import store from './store/CragStore';

import StoreRender from './components/StoreRender';
import { Navigation } from './components/Navigation'

class App extends Component {
  render(){
    return(
      <div className="app-wrapper">
          {/* <div className="box">

            <div className="app-header">
              <img className='app-logo' src="./assets/images/BetaClimb.png" alt="BetaClimb"/>
              <h1 className="title">BetaClimb</h1>
            </div>

            <StoreRender className="store-render" store={store} />

          <div className="dark-mode">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div> */}
        <Navigation />


      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
