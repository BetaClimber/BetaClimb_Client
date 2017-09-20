import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { observer } from 'mobx-react';

import Note from './Note';

let climb;

@observer
export class Logs extends Component {

  componentDidMount() {
    console.log(this.props.climb);
  }

  render() {
    climb = this.props.climb

    return(
      <div className="one-third logs-wrapper">
        <h4>ClimbType: </h4>
        <p>{climb.climbType}</p>
        <h4>Grade: </h4>
        <p>{climb.gradeType} | {climb.grade}</p>
        <Router>
          <ul>
            {this.props.climb.notes.map((note, i) => {
              const noteBuilder = () => {
                return (
                  <Note climbId={ climb.id }
                        popData={ this.props.onPop }
                        delete={ this.props.onDelete.bind(this) }
                        note={ note }
                        key={i}
                      />
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
