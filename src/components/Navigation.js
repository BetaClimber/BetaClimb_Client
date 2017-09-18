import React, { Component } from 'react';


import { Description } from './Description';
import { Stats } from './Stats';
import { Climbs } from './Climbs';
import { Upload } from './Upload';
import { Library } from './Library';

import store from '../store/Store';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export class Navigation extends Component{

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
      <span>
      <Router>
        <span>
        </span>
      </Router>
        <div className="navigation-wrapper">
        <Router>
          <div>
            <ul>
              <Link className='link_5' to="/dedicated/library"><img className='dedicated-library' src="../assets/images/video_library.svg" alt="Library"/></Link>
              <li className='navbar-link link_1'><Link to="/about"><img src="../assets/images/about.png" alt=""/></Link></li>
              <li className='navbar-link link_2'><Link to="/cliffnotes"><img src="../assets/images/notes.png" alt="notes"/></Link></li>
              <li className='navbar-link link_3'><Link to="/stats"><img src="../assets/images/level-up.png" alt="stats"/></Link></li>
              <li className='navbar-link link_4'><Link to="/panoramic/upload"><img src="../assets/images/photo-vr.png" alt=""/></Link></li>
            </ul>

            <div className="content-render">
              <Route path="/about" component={ Description }/>
              <Route path="/cliffnotes" render={ climbBuilder }/>
              <Route path="/stats" component={ Stats }/>
              <Route path="/panoramic/upload" component={ Upload }/>
              <Route className='dedicated-library-route' path="/dedicated/library" component={ Library }/>
            </div>
          </div>
        </Router>
      </div>
      </span>
    );
  }
};
