import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Log from './Log';

let Logs = observer( class Logs extends Component {
  render() {
    let climb = this.props.climb;
    return(
      <div className="logs-wrapper">
        <p>ClimbType: {climb.climbType}</p>
        <p>Grade: {climb.gradeType} | {climb.grade}</p>
        <Router>
          <ul>
            {this.props.climb.notes.map((note, i) => {
              const noteBuilder = () => {
                return (
                  <Log log={ climb.notes } key={i} />
                );
              }

              return (
                <div key={i} className="note-link-wrapper">

                  <li><Link to={`/${ note.title }`} key={i} >{ note.title }</Link></li>
                  <Route path={`/${ note.title }`} render={ noteBuilder } key={i}></Route>

                </div>
              );
            })}
          </ul>
        </Router>
      </div>
    );
  }
});

export default Logs;
