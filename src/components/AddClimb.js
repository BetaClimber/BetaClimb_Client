import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { store } from '../store/Store.js'

import { postClimbs } from '../axios/requests';

@observer
export class AddClimb extends Component {
  constructor(props){
    super();
  }

  @observable requestBody = {
    name: '',
    location: '',
    climbType: '',
    gradeType: '',
    grade: ''
  }

  onHandleInput(event){
    const target = event.target;
    const name = target.id;

    this.requestBody[name] = target.value;
  }

  onSubmitForm() {
    const reqBody = {};

    for(let prop in this.requestBody) {
      if (this.requestBody[prop] === '') {
        alert('Please fill out all items.');
        return false
      } else {
        reqBody[prop] = this.requestBody[prop];
      }
    }

    postClimbs(reqBody).then((response) => {
      this.props.onPopulate();
    });
  }

  render() {
    return (
      <div className="add-climb-wrapper">
        <label htmlFor="name">Name</label>
        <input
              defaultValue={ this.requestBody.name }
               type="text"
               placeholder='name'
               id='name'
               onChange={(event) => {
                 this.onHandleInput(event)
               }}/>

       <label htmlFor="location">Location</label>
       <input
              defaultValue={ this.requestBody.location }
              type="text"
              placeholder='location'
              id='location'
              onChange={(event) => {
                this.onHandleInput(event)
              }}/>

      <label htmlFor="climbType">Type</label>
      <select
          defaultValue={ this.requestBody.climbType }
          className='u-full-width'
          id='climbType'
          onChange={ (event) => {
            this.onHandleInput(event)
          } }>
        <option value="Select">Select a Type</option>
        <option value="Bouldering">Bouldering</option>
        <option value="Top-Rope">Top Rope</option>
        <option value="Lead">Lead</option>
        <option value="Solo">Solo</option>
        <option value="Free-Solo">Free Solo</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="gradeType">System</label>
      <select className="u-full-width"
          defaultValue={ this.requestBody.gradeType }
          id="gradeType"
          onChange={ (event) => {
            this.onHandleInput(event)
          } }>
        <option value="Select">Select a Rating System</option>
        <option value="YDS">YDS</option>
        <option value="Hueco">Hueco</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="grade">Rating</label>
      <input id='grade'
        value={ this.requestBody.grade }
              type="text"
              placeholder='rating'
              onChange={(event) => {
                this.onHandleInput(event)
              }}/>

      <button className="button-primary"
        onClick={ this.onSubmitForm.bind(this) }>
        Add
      </button>
    </div>
    );
  }
}
