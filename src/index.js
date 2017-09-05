import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';

import store from './store/CragStore';

import StoreRender from './components/StoreRender';

class App extends Component {
  render(){
    return(
      <div className="">

          <div className="box">
            <h1 className="title">Ropeless</h1>
            <StoreRender className="store-render" store={store} />

          <div className="dark-mode">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
