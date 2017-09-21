import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { routeNoteJoin, postNotes, putClimbs } from '../axios/requests';

import { observer } from 'mobx-react';
import { observable } from 'mobx';

import { Note } from './Note';
import { AddNote } from './AddNote';

let climb;

@observer
export class Logs extends Component {
  @observable onMount = false;

  componentDidMount() {
    console.log(this.props.climb);
  }

  onPopulate(reqBody) {

    postNotes(reqBody).then((results) => {
      routeNoteJoin({
        routeId: this.props.climb.id,
        noteId: results.data.data[0].id
      }).then((routeNoteResults) => {
        this.props.onPop();
      })
    })
    this.onMount = false;
  }


  onMountForm() {
    this.onMount = !this.onMount;
  }

  render() {
    climb = this.props.climb

    return(
      <div className="one-third logs-wrapper black-overlay">

        <button className='button-primary' onClick={ this.onMountForm.bind(this) }>Add Note</button>

        <h4 className='brown-header'>ClimbType: </h4>
        <p>{climb.climbType}</p>
        <h4 className='brown-header'>Rating: </h4>
        <p>{climb.gradeType} | {climb.grade}</p>
        {(this.onMount) ?
        <span>
          <AddNote onPopulate={ this.onPopulate.bind(this) }/>
        </span>
        : '' }
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
                  <h4 className='brown-header'>Note #{i + 1}</h4>
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
