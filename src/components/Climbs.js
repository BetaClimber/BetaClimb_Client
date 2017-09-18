import React, { Component } from 'react';
import { deleteNotes, getClimbs } from '../axios/requests';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { observer } from 'mobx-react';

import Logs from './Logs';

@observer
export class Climbs extends Component {

onDelete(note_id) {
  deleteNotes(note_id).then(() => {
    getClimbs().then((results) => {
        this.props.store.climbs.replace(results.data);
        console.log(this.props.store.climbs);
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

render() {
  let { filter, filteredRoutes, climbName } = this.props.store;
  console.log(this.props.store);
  return (
    <div className="rendered">
      <h1 className='cliffnotes-title'>Cliff Notes</h1>
      <input className="filter-routes" onChange={ this.filter.bind(this) }/>
      <Router>
            <ul className='fixed-routes'>
                {this.props.store.filteredRoutes.map((name, i) => {
                    const logBuilder = () => {
                      return(
                        <Logs climb={ this.props.store.climbs[i] } key={ i } onPop={ this.props.popData } onDelete={ this.onDelete.bind(this) } />
                      );
                    }

                    return (
                      <div key={i} className="route-links-wrapper">

                        <li><Link onClick={ this.unMountPath } to={`/${ name }`} key={i}><h2>{ name }</h2></Link></li>
                        <Route path={ `/${name}` } render={ logBuilder }></Route>

                      </div>
                    );
                  })
                }
            </ul>
      </Router>
    </div>

  );
}
};

/*
need a way to pass the props into the route component or create a const class that represents that within this component.
Once I have a way to set a prop relating to the climb_id then I can render.
  - Then I want to build the add component
    - Then I want to build a button.
    - Then I want to make a post request.
    - Then I want to build the other subcomponents.
    - I need to pass the ID of the climb parent as well as create POST PUT DELETE on the backend.
    - Then also fire off a re-fresh on the initial GET based on what the form updates.
  - Then I want to build the edit component
    - I want to have a button that redirects to an edit component.
    - I want to create the component to have a prop that represents the climb/note id.
    - I want to send a PUT request related to the join table being modified
    - I want to figure out how to POST the data or just make seperate requests to the respective tables.
  - Then I want to create a delete rotue that links to a button.
    - Make an axios DELETE request and that get the join tablek to be deleted.
*/
