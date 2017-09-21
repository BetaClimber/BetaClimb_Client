import React, { Component } from 'react';

import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
export class Note extends Component {

  // componentDidMount() {
  //   // console.log(this.props);
  // }

  render() {

    let note = this.props.note;

    return(
      <div className="log-wrapper">
        <p>Blerb: {note.blerb}</p>
        <p>Highlights: {note.highlights}</p>
        <p>Pitt-Falls: {note.pitfalls}</p>
        <p>Condition: {note.conditionType}</p>
        <button className='button-primary' onClick={ this.props.delete.bind(this, note.id) }>Delete</button>
    </div>


    );
  }
};
