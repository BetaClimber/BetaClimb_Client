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
        <button onClick={ this.props.delete.bind(this, note.id) }>Delete</button>
      </div>
    );
  }
};

export default Note;
