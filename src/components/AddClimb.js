import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { postClimbs } from '../axios/requests';

@observer
export class AddClimb extends Component {
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
    console.log(this.requestBody[name]);
  }

  // onHandleSelection(event){
  // //   const target = event.target;
  // //   const name = target.id;
  // //
  // //   this.requestBody[name] = target.value;
  //   event.target.value
  // }

  onSubmitForm() {
    const reqBody = this.requestBody;

    for(let prop in reqBody) {
      if (reqBody[prop] === '') {
        alert('Please fill out all items.');
        return false
      } else {
        // AddClimb(reqBody);
        console.log('requested new climb:', this.requestBody[prop]);
      }
    }
    return reqBody;
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
        <option value="Bouldering">Bouldering</option>
        <option value="Top-Rope">Top Rope</option>
        <option value="Lead">Lead</option>
        <option value="Solo">Solo</option>
        <option value="Free-Solo">Free Solo</option>
      </select>

      <label htmlFor="gradeType">System</label>
      <select className="u-full-width"
          defaultValue={ this.requestBody.gradeType }
          id="gradeType"
          onChange={ (event) => {
            this.onHandleInput(event)
          } }>
        <option value="YDS">YDS</option>
        <option value="Hueco">Hueco</option>
        <option value="Hueco">Other</option>
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
