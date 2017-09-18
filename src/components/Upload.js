import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from "mobx"

import Dropzone from 'react-dropzone';

@observer
export class Upload extends Component {
  @observable files = [];
  @observable uploaded = false;

  onDrop(file) {
    this.files = file;
    this.uploaded = true;
  }

  render(){
    return(
      <div className="rendered">
        <section>
          <div className="dropzone">
            <Dropzone onDrop={this.onDrop.bind(this)}>
              <p>Try dropping some files here, or click to select files to upload.</p>
            </Dropzone>
          </div>
          <aside>
            <h2>Dropped files</h2>
            {(this.uploaded) ? <iframe src="https://reactsample-174121.firebaseapp.com" frameBorder="0" title='VRPanoramic'></iframe> : '' }
            <ul>
              {this.files.map((image, i) => {
                return(
                  <div className="file-upload" key={i}>
                    <img src={image.preview} alt={image.name}/>
                    <li key={image.name}>{image.name} - {image.size} bytes</li>
                  </div>
                );
              }) || 'no files yet..'}
            </ul>
          </aside>
        </section>
      </div>
    );
  };
};
