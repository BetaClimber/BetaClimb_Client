import React, { Component } from 'react';

import Climbs from './Climbs';

import { Description } from './Description';
import { Stats } from './Stats';
import Upload from './Upload';

import store from '../store/Store';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Navigation extends Component{

  componentDidMount(){
    // getClimbs();
  }


  render() {
    const climbBuilder = () => {
      return(
        <Climbs store={ store } popData={ this.props.popData } />
      );
    }

    return (
        <div className="navigation-wrapper">
        <Router>
          <div>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/climbs">Climbs</Link></li>
              <li><Link to="/stats">Stats</Link></li>
              <li><Link to="/image/upload">Upload</Link></li>
            </ul>

            <div className="container content-render">
              <Route path="/about" component={ Description }/>
              <Route path="/climbs" render={ climbBuilder }/>
              <Route path="/stats" component={ Stats }/>
              <Route path="/image/upload" component={ Upload }/>        
            </div>
          </div>
        </Router>
      </div>
    );
  }
};

export default Navigation;
