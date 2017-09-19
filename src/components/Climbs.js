import React, { Component } from 'react';
import { deleteNotes, getClimbs } from '../axios/requests';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { observer } from 'mobx-react';
import { observable } from 'mobx';

import { Logs } from './Logs';
import { AddClimb } from './AddClimb';


@observer
export class Climbs extends Component {
  @observable mountForm = false;
  @observable mountClimbs = false;

  onDelete(note_id) {
    deleteNotes(note_id).then(() => {
      getClimbs().then((results) => {
          this.props.store.climbs.replace(results.data);
          this.forceUpdate();

        results.data.map((climbs, i) => {
          this.props.store.climbName[i] = climbs.name;
          return climbs;
        });
      });
    });
  }

  onMountForm() {
    this.mountForm = !this.mountForm;
    this.mountClimbs = false;
  }

  onMountClimbs() {
    this.mountClimbs = !this.mountClimbs;
    this.mountForm = false;
  }

  filter(event) {
    this.props.store.filter = event.target.value;
  }

render() {
  let { filter, filteredRoutes, climbName } = this.props.store;
  return (
    <div className="rendered">
      <div className="climb-wrapper lighten">
        <h1 className='hero-title'>Cliff Notes</h1>
        <button className="button-primary" onClick={ this.onMountForm.bind(this) }>Add Climb</button>
        <button className="button-primary" onClick={ this.onMountClimbs.bind(this) }>Show Climbs</button>

        {(this.mountForm === true ) ? <AddClimb/> : ''}

        <Router>
          <ul className='fixed-routes'>
            {(this.mountClimbs) ? this.props.store.filteredRoutes.map((name, i) => {
              <input className="filter-routes" onChange={ this.filter.bind(this) }/>
              const logBuilder = () => {
                return(
                  <Logs climb={ this.props.store.climbs[i] } key={ i } onPop={ this.props.popData } onDelete={ this.onDelete.bind(this) } />
                );
              }

              return (
                <div key={i} className="route-links-wrapper darken">

                  <li><Link onClick={ this.unMountPath } to={`/${ name }`} key={i}><h2>{ name }</h2></Link></li>
                  <Route path={ `/${name}` } render={ logBuilder }></Route>

                </div>
              );
            })
          : ''}
        </ul>
      </Router>
      </div>
    </div>

  );
}
};
