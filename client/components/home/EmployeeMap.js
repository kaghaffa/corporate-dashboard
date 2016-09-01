import React from 'react';
import Highcharts from 'highcharts/highmaps';

import map from '../../data/map';

const EmployeeMap = React.createClass({
  componentDidMount() {
    Highcharts.maps['custom/world-robinson-highres'] = map;

    this.map = new Highcharts.Map({
      title : {
        text : 'Employees Worldwide'
      },
      chart: {
        renderTo: 'mapdiv'
      },

      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },

      colorAxis: {
        min: 0
      },

      series : [{
        data: this._mapData(this.props.locations),
        mapData: Highcharts.maps['custom/world-robinson-highres'],
        joinBy: 'hc-key',
        name: 'Random data',
        states: {
          hover: {
            color: '#BADA55'
          }
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }]
    });
  },

  componentWillUpdate(nextProps, nextState) {
    this.map.series[0].setData(this._mapData(nextProps.locations));
    this.map.redraw();
  },

  _mapData(locations) {
    return locations.map(function(location) {
      return {
        'hc-key': location.location,
        value: parseInt(location.num_employees)
      }
    });
  },

  render() {
    return (
      <div className="employee-map">
        <div id="mapdiv" width="600" height="400"></div>
      </div>
    )
  }
});

export default EmployeeMap;