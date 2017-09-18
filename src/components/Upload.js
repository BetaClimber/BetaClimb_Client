import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from "mobx"

import Dropzone from 'react-dropzone';

@observer
export class Upload extends Component {
  @observable file = null;
  @observable uploaded = false;

  onDrop(file) {
    this.file = file;
    this.uploaded = true;
  }

  render(){
    return(
      <div className="rendered">
        <div className="vr-wrapper lighten">
          <h1 className='hero-title'>PhotoVR</h1>
          <div className="dropzone">
            <Dropzone onDrop={this.onDrop.bind(this) }>
              <p>Drop a Panoramic Skin</p>
            </Dropzone>
          </div>
          { (this.uploaded) ? <iframe className='vr-frame' src="http://www.betaclimb.rocks" frameBorder="0" title='VRPanoramic'></iframe>
          : '' }

          <h3>Panoramic Image:</h3>
          {(this.file) ?
            <ul>
            <img src={this.file[0].preview} alt={this.file[0].name}/>
            <li key={this.file[0].name}>{this.file[0].name} - {this.file[0].size} bytes</li>
          </ul>
          : 'no file yet...'}
        </div>
      </div>
    );
  };
};
