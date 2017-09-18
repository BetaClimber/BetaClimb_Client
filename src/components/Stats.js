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
      ['Language', 'Speakers (in millions)'],
      ['Assamese', 13], ['Bengali', 83], ['Bodo', 1.4],
      ['Dogri', 2.3], ['Gujarati', 46], ['Hindi', 300],
      ['Kannada', 38], ['Kashmiri', 5.5], ['Konkani', 5],
      ['Maithili', 20], ['Malayalam', 33], ['Manipuri', 1.5],
      ['Marathi', 72], ['Nepali', 2.9], ['Oriya', 33],
      ['Punjabi', 29], ['Sanskrit', 0.01], ['Santhali', 6.5],
      ['Sindhi', 2.5], ['Tamil', 61], ['Telugu', 74], ['Urdu', 52]
    ]);

    const options = {
      title: 'progress',
      legend: 'none',
      pieSliceText: 'label',
      slices: {
         4: {offset: 0.2},
        12: {offset: 0.3},
        14: {offset: 0.4},
        15: {offset: 0.5},
      },
      'width':400,
      'height':300
    };

    const chart = new window.google.visualization.PieChart(document.getElementById(chartID));
    chart.draw(data, options);
  }

  drawBarChart(chartID) {

    const data = window.google.visualization.arrayToDataTable([
       ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
       ['2004/05',  165,      938,         522,             998,           450,      614.6],
       ['2005/06',  135,      1120,        599,             1268,          288,      682],
       ['2006/07',  157,      1167,        587,             807,           397,      623],
       ['2007/08',  139,      1110,        615,             968,           215,      609.4],
       ['2008/09',  136,      691,         629,             1026,          366,      569.6]
    ]);

    const options = {
      title : 'Monthly Coffee Production by Country',
      vAxis: {title: 'Cups'},
      hAxis: {title: 'Month'},
      seriesType: 'bars',
      series: {5: {type: 'line'}},
      width: 400,
      height: 300
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

          <p>Total Climbs: { store.climbs.length }</p>

        </div>
      </div>
    );
  };
};

export default Stats;
