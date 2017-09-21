import React, { Component } from 'react';

import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
export class AddNote extends Component {
  @observable requestBody = {
    "title": "this is a dumby climb",
    "highlights": "It was fun getting to know more about what climbing now has to offer",
    "pitfalls": "I had a hard time catching my balance at the crux",
    "blerb": "My climbing buddy showed me a better way to the top",
    "conditionType": "indoors"
  }

  onHandleInput(event) {
    const target = event.target;
    const name = target.id;

    this.requestBody[name] = target.value;
    console.log(this.requestBody[name]);
  }

  onSubmitForm() {
    const reqBody = this.requestBody;

    for(let prop in reqBody) {
      if (reqBody[prop] === '') {
        alert('Please fill out all items.');
        return false
      } else {
        console.log('requested new note:', this.requestBody[prop]);
      }
    }
    console.log(reqBody);
    this.props.onPopulate(reqBody);
    return reqBody
  }

  render() {
    return (
      <div className="add-climb-wrapper">
        <label htmlFor="name">title</label>
        <input
              defaultValue={ this.requestBody.title }
                 type="text"
                 placeholder='title'
                 id='title'
                 onChange={(event) => {
                   this.onHandleInput(event)
                 }}/>

               <label htmlFor="highlights">Highlights</label>
               <input
                 defaultValue={ this.requestBody.highlights }
                  type="text"
                  placeholder='highlights'
                  id='highlights'
                  onChange={(event) => {
                    this.onHandleInput(event)
                  }}/>

                <label htmlFor="pitfalls">Pitfalls</label>
                <input
                  defaultValue={ this.requestBody.pitfalls }
                  type="text"
                  placeholder='pitfalls'
                  id='pitfalls'
                  onChange={(event) => {
                    this.onHandleInput(event)
                  }}/>

                <label htmlFor="blerb">blerb</label>
                <input
                  defaultValue={ this.requestBody.blerb }
                  type="text"
                  placeholder='blerb.. blerb...'
                  id='blerb'
                  onChange={(event) => {
                    this.onHandleInput(event)
                  }}/>

                <label htmlFor="conditionType">Conditions</label>
                <input
                  defaultValue={ this.requestBody.conditionType }
                   type="text"
                   placeholder='Conditions'
                   id='conditionType'
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
