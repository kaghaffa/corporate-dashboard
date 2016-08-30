import React from 'react';
import Chart from 'chart.js';

const Sidebar = React.createClass({
  propTypes: {
    customers: React.PropTypes.array.isRequired
  },

  componentDidMount() {
    var labels = this.props.customers.map((customer) => customer.date)
    var arr = []
    var data = this.props.customers
      .map((customer) => customer.customers_acquired)
      .reduce(function (a, b) {
        if (a.length) {
          b += a[a.length - 1];
        }
        a.push(b);
        return a;
      }, [])
    console.log(data)

    var ctx = this.refs.custAcqChart;
    var myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            label: "Customers Acquired",
            data
          }
        ]
      }
    });
  },

  render() {
    return (
      <div className="customers-acquired-graph">
        <canvas ref="custAcqChart" width="400" height="400"></canvas>
      </div>
    );
  }
});

export default Sidebar;