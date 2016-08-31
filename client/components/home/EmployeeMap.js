import React from 'react';
import Highcharts from 'highcharts/highmaps';

import map from '../../data/map';

const EmployeeMap = React.createClass({
  componentDidMount() {
    var data = this.props.locations.map(function(location) {
      return {
        'hc-key': location.location,
        value: location.num_employees
      }
    });

    Highcharts.maps['custom/world-robinson-highres'] = map;

    var chart = new Highcharts.Map({
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
        data,
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

  render() {
    return (
      <div className="employee-map">
        <div id="mapdiv" width="600" height="400"></div>
      </div>
    )
  }
});

export default EmployeeMap;