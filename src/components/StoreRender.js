import React, { Component } from 'react';
import { observer } from 'mobx-react';

let StoreRender = observer(
  class StoreRender extends Component {
    filter(e){
      this.props.store.filter = e.target.value;
    }
  render() {
    const { filter, filteredRoutes } = this.props.store;
    return(
      <div className="routes-container">

        <input className="filter-routes" value={filter} onChange={this.filter.bind(this) }/>
        {this.props.store.filter}
        {this.props.store.filteredRoutes.map((route, i) => {
          return(
            <p key={i} className="store-test">{route}</p>
          );
        })}

        <label htmlFor="filterText">Searching For: </label>
        <span id="filterText">{filter}</span>
      </div>
    );
  }
});

export default StoreRender;
