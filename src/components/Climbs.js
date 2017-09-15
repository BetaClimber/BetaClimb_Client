import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Logs from './Logs';

let Climbs = observer(
  class Climbs extends Component {

  render() {
    return (
      <div className="navigation-wrapper">
        <Router>
              <ul>
                  {
                    this.props.store.climbName.map((name, i) => {
                      const logBuilder = () => {
                        return(
                          <Logs climb={this.props.store.climbs[i]} key={i} />

                        );
                      }

                      return (
                        <div key={i} className="route-links-wrapper">

                          <li><Link to={`/${name}`} key={i}>{ name }</Link></li>
                          <Route path={`/${name}`} render={logBuilder}></Route>

                        </div>
                      );
                    })
                  }
              </ul>
        </Router>
      </div>
    );
  }
});

export default Climbs;

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
    -



*/
