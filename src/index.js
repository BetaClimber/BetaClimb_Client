import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

import 'react-skeleton-css/styles/skeleton.2.0.4.css'
import './styles/normalize.css';

import { observer } from 'mobx-react';

import registerServiceWorker from './registerServiceWorker';

import store from './store/Store';

// requests
import { getClimbs } from './axios/requests';

import StoreRender from './components/StoreRender';
import Navigation  from './components/Navigation'
import {Animate} from './TweenMax/Animate';

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
    const { onShow , showContent } = store;
    console.log(onShow, showContent);

    return(
    <div className="app-root">
      <Animate />
      <div className="section hero">
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <img className="ledge" src="../assets/images/ledge.png"/>
              <img className='app-brand' src="../assets/images/BetaClimb.png" alt="BetaClimb"/>
            </div>

            <div className="one-half column phones">
              <img className="cliff" src="../assets/images/cliff.png"/>
            </div>
          </div>
        </div>
      </div>
      {onShow}
      {(showContent) ? (
        <span className="wrapper">
          <div className="section values">
            <div className="container">
              <div className="row">

                <div className="one-third column">

                </div>

                <div className="one-third column">
                  <StoreRender store={store} />
                </div>

                <div className="one-third column">
                  <Navigation popData={ this.populateClimbingData.bind(this) } />
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="container">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </span>
    ) : <h1>Loading</h1>}

    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
