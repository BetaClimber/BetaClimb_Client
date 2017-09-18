import React, { Component } from 'react';

export class Library extends Component {
  render() {
    return (
      <div className="rendered black">
        <iframe className='dedicated-library-player' src="http://betatube.betaclimb.rocks/" frameBorder="0" title='Alex Honnold'></iframe>
      </div>
    );
  }
}
