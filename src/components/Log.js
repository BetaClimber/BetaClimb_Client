import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from '../store/Store';

import {deleteNotes, getNotes } from '../axios/requests';

let Log = observer(
  class Log extends Component {

    componentDidMount() {
      console.log(store);
    }

    onDelete(note_id) {
      deleteNotes(note_id);
    }

    render() {
      return(
        <div className="log-wrapper">
            {this.props.log.map((note, i) => {
              return(
              <ul className="note-wrapper" key={i}>
                <li>Blerb: {note.blerb }</li>
                <li>highlights: { note.highlights }</li>
                <li>Pitfalls: { note.pitfalls }</li>
                <li>Conditions: { note.conditionType }</li>
                {/* <p>{ note.created_at }</p> // moment.js */}
                <button onClick={ this.onDelete.bind(this, note.id) }>Delete</button>
                <hr/>
              </ul>
              );
            })}
        </div>
      );
    }
  });

export default Log;
