import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import { observer } from 'mobx-react';

import registerServiceWorker from './registerServiceWorker';

import store from './store/Store';

// requests
import { getClimbs } from './axios/requests';

import StoreRender from './components/StoreRender';
import Navigation  from './components/Navigation'

@observer
class App extends Component {

  componentDidMount() {
    this.populateClimbingData();
  }

  populateClimbingData(){
    getClimbs().then((results) => {
      let badgeList = null;

      badgeList = this.climbCount(results.data.length);

      store.climbs = results.data;
      store.badges = badgeList || [];

      results.data.map((climbs, i) => {
        store.climbName[i] = climbs.name;
        return climbs;
      });
    });
  }

  climbCount(stats) {
    let statList = [];

    if (stats >= 1) {
      statList.push('You completed your first climb.');
    }
    if (stats >= 3) {
      statList.push('You completed your third climb.');
    }
    return statList;
  }

  render(){
    return(
      <div className="app-root">

            <div className="app-header">
              <img className='app-logo' src="../assets/images/BetaClimb.png" alt="BetaClimb"/>
              <h1 className="title">BetaClimb</h1>
            </div>

            <StoreRender className="store-render" store={store} />
            <Navigation className="navigation" popData={ this.populateClimbingData.bind(this) } />

          <div className="dark-mode">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>


      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
