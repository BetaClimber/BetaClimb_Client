import React, { Component } from 'react';

import store from '../store/Store';
import { observer } from 'mobx-react';

import GoogleChart from 'google-chart-react';

export class Stats extends Component {

  componentDidMount() {
    window.googleChartReactPackages = ['corechart'];
  }

  drawPieChart(chartID) {

    const data = window.google.visualization.arrayToDataTable([
      ['Climbs', 'total'],
      ['Bouldering', 13],
      ['Top-Rope', 83],
      ['Lead', 5],
      ['Solo', 1],
      ['Free-Solo', 3],
      ['Other', 1]
    ]);

    const options = {
      title: 'progress',
      legend: 'none',
      pieSliceText: 'label',
      slices: {
         2: {offset: 0.5}
      },
      'width':400,
      'height':300
    };

    const chart = new window.google.visualization.PieChart(document.getElementById(chartID));
    chart.draw(data, options);
  }

  drawBarChart(chartID) {

    const data = window.google.visualization.arrayToDataTable([
       ['Month', 'Notes', 'climbs', 'PanoUploads'],
       ['2017/05',  5,       24,        0],
       ['2017/06',  30,      40,        2],
       ['2017/07',  80,      83,        10]
    ]);

    const options = {
      title : 'Monthly Logs',
      vAxis: {title: 'Logs'},
      hAxis: {title: 'Month'},
      seriesType: 'bars',
      series: {5: {type: 'line'}},
      width: 900,
      height: 600
    };

		const chart = new window.google.visualization.ComboChart(document.getElementById(chartID));
		chart.draw(data, options);
  }


  render() {

    return(
      <div className="rendered">
        <div className="star-chart lighten">
          <h1 className='hero-title'>Stats</h1>

          <div className='pie-chart'id="pieChart">
            <GoogleChart className='' drawChart={this.drawPieChart} />
          </div>

          <div className='bar-chart' id="barChart">
            <GoogleChart className='' drawChart={this.drawBarChart} />
          </div>

        </div>
      </div>
    );
  };
};

export default Stats;
