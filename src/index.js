import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { getClimbs } from './axios/requests';

import 'react-skeleton-css/styles/skeleton.2.0.4.css'
import './styles/index.css';
// import './styles/normalize.css';


import store from './store/Store';

import { observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navigation }  from './components/Navigation'
// import { PreLoader } from './TweenMax/PreLoader';

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
      {/* { showContent ||<PreLoader /> } */}
        <div className="section hero">
        <div className="container">
          <div className="row cliff-navigation">

            {/* { (showContent) ? ( */}
              <div className="eleven columns"></div>
              <Navigation className='one column' popData={ this.populateClimbingData.bind(this) } />
          {/* ) : ''} */}
            <div className="one-half column">
              <img className="ledge" src="../assets/images/ledge.png"/>
              <img className='app-brand' src="../assets/images/BetaClimb.png" alt="BetaClimb"/>
            </div>


                <div className="one-half column phones">
                  <img className="cliff" src="../assets/images/cliff.png"/>
                </div>

            {/* { onShow } */}
          </div>
        </div>
      </div>

      {/* { (showContent) ? ( */}
        {/*
          <div className="section values">
            <div className="container">
              <div className="row">

                <div className="one-third column">

                </div>

                <div className="one-third column">
                </div>

              </div>
            </div>
          </div>
        </span> */}
    {/* ) : <h1>Loading</h1> } */}

    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
