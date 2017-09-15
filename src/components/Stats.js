import React, { Component } from 'react';
import store from '../store/Store';


export class Stats extends Component {
  render() {
    return(
    <div className="stats-wrapper">
      <p>Total Climbs: { store.climbs.length }</p>

      <h2>Badges</h2>
      <ul>
        {store.badges.map((badge, i) => {
          return (
            <li key={i}>{badge}</li>
          );
        })}
      </ul>
    </div>
    );
  };
};

export default Stats;
