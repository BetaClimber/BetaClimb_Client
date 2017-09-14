import React, { Component } from 'react';
import store from '../store/Store';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Logs } from './Logs';

export class Climbs extends Component{

  render() {
    return (
      <div className="navigation-wrapper">
        <Router>
              <ul>
                  {
                    store.climbName.map((name, i) => {
                      return (
                        <div className="route-links-wrapper">
                          <li><Link to={`/${name}`} key={i}>{name}</Link></li>
                          <Route path={`/${name}`} component={ Logs } key={i}></Route>
                        </div>
                      );
                    })
                  }
              </ul>
        </Router>
      </div>
    );
  }
};

export default Climbs;
