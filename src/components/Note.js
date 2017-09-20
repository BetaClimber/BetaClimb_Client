import React, { Component } from 'react';

import { observer } from 'mobx-react';
import { observable } from 'mobx';

import { AddNote } from './AddNote';

@observer
export class Note extends Component {
  @observable onMount = false;

  // onMountForm() {
  //   this.onMount = !this.onMount;
  // }

  // onPopulate(climbID, noteID) {
  //
  // }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    let note = this.props.note
    return(
      <div className="log-wrapper">
        <p>Blerb: {note.blerb}</p>
        <p>Highlights: {note.highlights}</p>
        <p>Pitt-Falls: {note.pitfalls}</p>
        <p>Condition: {note.conditionType}</p>
        <button className='button-primary'>Add Note</button> {/* onClick={this.props.onMountForm.bind(this)} */}
        <button className='button-primary' onClick={ this.props.delete.bind(this, note.id) }>Delete</button>
      </div>
      // {(this.onMount) ?
      //   <AddNote onPopulate={ this.onPopulate.bind(this) }/>
      //   : ''}
    );
  }
};

export default Note;
