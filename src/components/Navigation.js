import React, { Component } from 'react';

import { Description } from './Description';

// import {gsap, TimelineMax, TweenMax} from 'gsap';
// import * as ScrollMagic from 'scrollmagic';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const log, stats;

export class Navigation extends Component{
  render() {
    return (
      <div className="navigation-wrapper">
        <Router>
          <div>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/logs">Logs</Link></li>
              <li><Link to="/stats">Stats</Link></li>
            </ul>

            <hr/>

            <Route path="/about" component={Description}/>
            <Route path="/logs" component={Log}/>
            <Route path="/stats" component={Stat}/>
          </div>
        </Router>
      </div>
    );
  }
};
