import React, { Component } from 'react';

export class Note extends Component {

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
        <button className='button-primary'>Add</button>
        <button className='button-primary' onClick={ this.props.delete.bind(this, note.id) }>Delete</button>
      </div>
    );
  }
};

export default Note;
