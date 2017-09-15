import React, { Component } from 'react';

export class Note extends Component {

  componentDidMount() {

  }

  render() {
    let note = this.props.note
    return(
      <div className="log-wrapper">
        <p>{note.blerb}</p>
        <p>{note.highlights}</p>
        <p>{note.pitfalls}</p>
        <p>{note.conditionType}</p>
        <button onClick={ this.props.delete.bind(this, note.id) }>Delete</button>
      </div>
    );
  }
};

export default Note;
