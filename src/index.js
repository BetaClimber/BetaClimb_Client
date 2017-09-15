import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';

import store from './store/Store';

// requests
import { getClimbs } from './axios/requests';

import StoreRender from './components/StoreRender';
import Navigation  from './components/Navigation'

class App extends Component {

  componentDidMount() {
    let climbingData = null;
    let notes = null;
    let badgeList = null;

    getClimbs().then((results) => {

      climbingData = results.data;
      climbingData.map((climbs, i) => {
        store.climbName[i] = climbs.name;
        store.climbType[i] = climbs.climbType;
        store.grade[i] = climbs.grade;
        store.gradeType[i] = climbs.gradeType;
        return climbs;
      });

      badgeList = this.climbCount(climbingData.length);

      notes = climbingData.map((climb, i) => {
        return ({
                climbID: climb.id,
                content: climb.notes
              });
      });

      store.badges = badgeList || [];
      store.notes = notes;
      store.climbs = climbingData;
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

  thirdClimb(stats) {

  }

  render(){
    return(
      <div className="app-wrapper">
          <div className="box">

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
        </div>
        <Navigation/>


      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
