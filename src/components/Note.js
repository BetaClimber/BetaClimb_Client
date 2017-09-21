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

      <div className='note-wrapper black-overlay'>
        <h4 className='brown-header'>Blerb</h4>
        <p>{ note.blerb }</p>
        <h4 className='brown-header'>Highlights</h4>
        <p>{ note.highlights }</p>
        <h4 className='brown-header'>Pitt-Falls</h4>
        <p>{ note.pitfalls }</p>
        <h4 className='brown-header'>Condition</h4>
        <p>{ note.conditionType }</p>
        <button className='button-primary' onClick={ this.props.delete.bind(this, note.id) }>Delete</button>
    </div>

    );
  }
};
