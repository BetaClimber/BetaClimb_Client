import React, { Component } from 'react';

import store from '../store/Store';
import { observer } from 'mobx-react';

import GoogleChart from 'google-chart-react';
import * as d3 from "d3";


export class Stats extends Component {
  constructor() {
    super();
    window.googleChartReactPackages = ['corechart', 'gantt'];
  }


  componentDidMount() {

    const w = 960,
      h = 500,
      z = 20,
      x = w / z,
      y = h / z;

  const svg = d3.select("#transform")
    .append("svg")
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

  mouseover() {
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

  drawBarChart(chartID) {
		var data = window.google.visualization.arrayToDataTable([
			['City', '2010 Population', '2000 Population'],
			['New York City, NY', 8175000, 8008000],
			['Los Angeles, CA', 3792000, 3694000],
			['Chicago, IL', 2695000, 2896000],
			['Houston, TX', 2099000, 1953000],
			['Philadelphia, PA', 1526000, 1517000]
		]);
		var options = {
			title: 'Population of Largest U.S. Cities',
			chartArea: {width: '50%'},
			colors: ['#b0120a', '#ffab91'],
			hAxis: {
				title: 'Total Population',
				minValue: 0
			},
			vAxis: {
				title: 'City'
			}
		};
		var chart = new window.google.visualization.BarChart(document.getElementById(chartID));
		chart.draw(data, options);
	}

  render() {

    return(
    <div className="rendered">
      <div className="graph-wrapper">
        <div className="graph-tranform" id="transform"></div>

          <p>Total Climbs: { store.climbs.length }</p>

          <div id="barChart">
  					<h2>Stats</h2>
  					<GoogleChart drawChart={this.drawBarChart} />
  				</div>

      </div>
    </div>
    );
  };
};

export default Stats;
