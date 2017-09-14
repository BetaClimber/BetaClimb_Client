import React, { Component } from 'react';
import store from '../store/Store';


export class Stats extends Component {
  render() {
    return(
    <div className="stats-wrapper">
      <p>Total Climbs: { store.climbs.length }</p>
    </div>
    );
  };
};

export default Stats;
