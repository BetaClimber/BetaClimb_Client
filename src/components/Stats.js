import React, { Component } from 'react';
import store from '../store/Store';

import * as d3 from "d3";


export class Stats extends Component {
  componentDidMount() {
    const w = 960,
      h = 500,
      z = 20,
      x = w / z,
      y = h / z;

  const svg = d3.select("#transform").append("svg")
    .attr("width", w)
    .attr("height", h);

  svg.selectAll("rect")
    .data(d3.range(x * y))
  .enter().append("rect")
    // .attr("transform", this.translate)
    .attr("width", z)
    .attr("height", z)
    .style("fill", function(d) { return d3.hsl(d % x / x * 360, 1, Math.floor(d / x) / y); })
    .on("mouseover", this.mouseover);
  }

  mouseover(d) {
    this.parentNode.appendChild(this);

    d3.select(this)
        .style("pointer-events", "none")
      .transition()
        .duration(750)
        .attr("transform", "translate(500,500)scale(23)rotate(180)")
      .transition()
        .delay(1500)
        .attr("transform", "translate(250,250)scale(0)")
        .style("fill-opacity", 0)
        .remove();
  }

  render() {

    return(
    <div className="rendered">
      <div className="graph-wrapper">
        <div className="graph-tranform" id="transform"></div>

          <p>Total Climbs: { store.climbs.length }</p>

          <div className="badges">
            
            <h2>Badges</h2>
            <ul>
              {store.badges.map((badge, i) => {
                return (
                  <li key={i}>{badge}</li>
                );
              })}
            </ul>
          </div>
      </div>
    </div>
    );
  };
};

export default Stats;
