import React, { Component } from 'react';

import { Description } from './Description';
import { Climbs } from './Climbs';
import { Stats } from './Stats';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export class Navigation extends Component{

  componentDidMount(){
    // getClimbs();
  }


  render() {
    return (
      <div className="navigation-wrapper">
        <Router>
          <div>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/climbs">Climbs</Link></li>
              <li><Link to="/stats">Stats</Link></li>
            </ul>

            <hr/>

            <Route path="/about" component={ Description }/>
            <Route path="/climbs" component={ Climbs }/>
            <Route path="/stats" component={ Stats }/>
          </div>
        </Router>
      </div>
    );
  }
};
