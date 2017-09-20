import React, { Component } from 'react';

export class Description extends Component{
  render() {
    return (
      <div className="rendered">
        <div className="description-wrapper lighten">
          <h1 className="hero-title">Inspiration</h1>
          <h2>Honnold Foundation</h2>

          <img className='foundation' src="../assets/images/honnold-foundation.jpeg" alt="image alt"/> {/*get the text to wrap around the image with some css*/}

          <p>
            One of the best climbers in the world has committed to giving away a third of his wealth to
            build and support imporverished communities worldwide. This humanitarian drive to give is the
            root of the inspiration for BetaClimb.
          </p>

          <h2 className='project'>Project</h2>

          <p>
            Checkout <a href="http://www.BetaClimb.Rocks">www.BetaClimb.Rocks</a> on Mobile (Android and iPhone compatible) for a Panoramic VRExperience.
          </p>

        </div>
      </div>
    );
  }
};
