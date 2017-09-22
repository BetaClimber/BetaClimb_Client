import React, { Component } from 'react';
import { deleteNotes, getClimbs } from '../axios/requests';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { observer } from 'mobx-react';
import { observable } from 'mobx';

import { Logs } from './Logs';
import { AddClimb } from './AddClimb';
import { store } from '../store/Store';


@observer
export class Climbs extends Component {
  @observable mountClimbForm = false;
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

   filter(event) {
    this.props.store.filter = event.target.value;
   }

  onMountForm() {
    this.mountClimbForm = true;
    this.mountClimbs = false;
  }

  onMountClimbs() {
    this.mountClimbs = true;
    this.mountClimbForm = false;
  }

  onPopulate() {
    (this.mountClimbs === false) ? this.onMountClimbs() : '';

    getClimbs().then((results) => {
      this.props.store.climbs.replace(results.data);
      this.forceUpdate();
      console.log(results);

      results.data.map((climbs, i) => {
        this.props.store.climbName[i] = climbs.name;
        return climbs;
      });
    });
  }

  filter(event) {
    this.props.store.filter = event.target.value;
  }

render() {
  let { filter, filteredRoutes, climbName } = this.props.store;
  return (
    <div className="rendered">
      <div className="climb-wrapper lighten">
        <h1 className='hero-title'>CliffNotes</h1>
        <button className="button-primary" onClick={ this.onMountForm.bind(this) }>Add Climb</button>
        <button className="button-primary" onClick={ this.onMountClimbs.bind(this) }>Show Climbs</button>

        <input className="filter-routes" onChange={ this.filter.bind(this) }/>

        { (this.mountClimbForm === true ) ? <AddClimb onPopulate={ this.onPopulate.bind(this)}/> : ''}
        { (this.mountClimbs) ?
        <Router>
          <ul className='fixed-routes'>
            { this.props.store.filteredRoutes.map((name, i) => {
              const logBuilder = () => {
                return(
                  <Logs climb={ this.props.store.climbs[i] }
                        key={ i }
                        onPop={ this.onPopulate.bind(this) }
                        onDelete={ this.onDelete.bind(this) }
                      />
                );
              }

              return (
                <div key={i} className="route-links-wrapper right-text">

                  <li className='black-overlay'><Link className='brown-header' onClick={ this.unMountPath } to={`/${ name }`} key={i}><h2><img className='sunset-logo' src="../assets/images/sunset.png" alt="climb-sunset"/>{ name }</h2></Link></li>
                  <Route path={ `/${name}` } render={ logBuilder }></Route>

                </div>
              );
            }) }
        </ul>
      </Router>
      : '' }
      </div>
    </div>

  );
}
};
