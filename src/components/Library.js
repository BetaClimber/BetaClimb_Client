import React, { Component } from 'react';

export class Library extends Component {
  render() {
    return (
      <div className="rendered">
        <div className="dedicated-library-player lighten">
          <h1 className='hero-title'>ClimbTube</h1>
          <iframe className='scale-player' src="http://betatube.betaclimb.rocks/" frameBorder="0" title='Alex Honnold'></iframe>
        </div>
      </div>
    );
  }
}
