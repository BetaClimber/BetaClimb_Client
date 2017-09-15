import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class StoreRender extends Component {

  render() {
    const { filter, filteredRoutes, climbName } = this.props.store;
    return(
      <div className="routes-container">

        {/* <input className="filter-routes" value={filter} onChange={this.filter.bind(this) }/> */}
        {this.props.store.filteredRoutes.map((route, i) => {
          return(
            <p key={i} className="store-test">{route}</p>
          );
        })}

      </div>
    );
  }
};

export default StoreRender;
