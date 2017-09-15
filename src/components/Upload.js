import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../store/Store';

import Dropzone from 'react-dropzone';

let Upload = observer(class Upload extends Component {

  onDrop(images) {
    store.files = images;
    console.log(images);
  }

  render(){
    return(
      <div className="image-drop-wrapper">
        <section>
          <div className="dropzone">
            <Dropzone onDrop={this.onDrop.bind(this)}>
              <p>Try dropping some files here, or click to select files to upload.</p>
            </Dropzone>
          </div>
          <aside>
            <h2>Dropped files</h2>
            <ul>
              {store.files.map((image, i) => {
                return(
                  <div className="file-upload" key={i}>
                    <img src={image.preview} alt={image.name}/>
                    <li key={image.name}>{image.name} - {image.size} bytes</li>
                  </div>
                );
                })}
            </ul>
          </aside>
        </section>
      </div>
    );
  }
});

export default Upload;
