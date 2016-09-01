import React from 'react';

import values from 'object.values';

if (!Object.values) {
    values.shim();
}

const Sidebar = React.createClass({
  propTypes: {
    issuesByMonth: React.PropTypes.object.isRequired
  },

  _convertIntToMonth(num) {
    return {
      1: 'Jan',
      2: 'Feb',
      3: 'Mar',
      4: 'Apr',
      5: 'May',
      6: 'Jun',
      7: 'Jul',
      8: 'Aug',
      9: 'Sep',
      10: 'Oct',
      11: 'Nov',
      12: 'Dec',
    }[num]
  },

  _barChartLabels(issuesByMonth) {
    return Object.keys(issuesByMonth).map((monthNum) =>
      this._convertIntToMonth(monthNum)
    );
  },

  _barChartData(issuesByMonth) {
    return Object.values(issuesByMonth);
  },

  componentDidMount() {
    var ctx = this.refs.reportedIssuesChart;
    this.reportedIssuesChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this._barChartLabels(this.props.issuesByMonth),
        datasets: [{
          label: '# of Issues per Month',
          data: this._barChartData(this.props.issuesByMonth),
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  },

  componentWillUpdate(nextProps, nextState) {
    this.reportedIssuesChart.data.datasets[0].data = this._barChartData(nextProps.issuesByMonth);
    this.reportedIssuesChart.data.labels = this._barChartLabels(nextProps.issuesByMonth);
    this.reportedIssuesChart.update();
  },

  render() {
    return (
      <div className="reported-issues-chart">
        <canvas ref="reportedIssuesChart" width="400" height="400"></canvas>
      </div>
    );
  }
});

export default Sidebar;