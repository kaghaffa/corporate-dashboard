import React from 'react';

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

  componentDidMount() {
    var months = Object.keys(this.props.issuesByMonth).map((monthNum) =>
      this._convertIntToMonth(monthNum)
    );
    var numIssues = Object.values(this.props.issuesByMonth);

    var ctx = this.refs.reportedIssuesChart;
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: months,
        datasets: [{
          label: '# of Issues per Month',
          data: numIssues,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBackgroundColor: "rgba(255,99,132,1)",
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

  render() {
    return (
      <div className="reported-issues-chart">
        <canvas ref="reportedIssuesChart" width="400" height="400"></canvas>
      </div>
    );
  }
});

export default Sidebar;