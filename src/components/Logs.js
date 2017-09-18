import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Note from './Note';

let climb;

class Logs extends Component {

  componentDidMount() {
  }

  render() {
    climb = this.props.climb

    return(
      <div className="one-third logs-wrapper">
        <p>ClimbType: {climb.climbType}</p>
        <p>Grade: {climb.gradeType} (USA) | {climb.grade}</p>
        <Router>
          <ul>
            {this.props.climb.notes.map((note, i) => {
              const noteBuilder = () => {
                return (
                  <Note popData={ this.props.onPop } delete={ this.props.onDelete.bind(this) } note={ note } key={i}  />
                );
              }

              return (
                <div key={i} className="note-link-wrapper">

                  <li><Link to={`/notes_${i}`} key={i} ><h3>{ note.title }</h3></Link></li>
                  <Route path={`/notes_${i}`} render={ noteBuilder } key={i}></Route>

                </div>
              );
            })}
          </ul>
        </Router>
      </div>
    );
  }
};

export default Logs;
