import React from 'react';

import CustomersAcquiredGraph from './metrics/CustomersAcquiredGraph';
import ReportedIssuesChart from './metrics/ReportedIssuesChart';
import DataWidget from './metrics/DataWidget';

const Metrics = React.createClass({
  _parseIssuesData() {
    this.parsedIssues = {
      openIssues: 0,
      issuesByMonth: {}
    };
    this.props.issues.forEach((issue) => {
      if (!issue.closed_date) {
        this.parsedIssues.openIssues++;
      }

      var month = issue.open_date.split('/')[0]
      var issuesByMonth = this.parsedIssues.issuesByMonth[month];
      this.parsedIssues.issuesByMonth[month] = issuesByMonth ? issuesByMonth + 1 : 1
    });
  },

  componentWillMount() {
    this._parseIssuesData()
  },

  _openIssuesStr() {
    var str = this.parsedIssues.openIssues

    if (this.parsedIssues.openIssues == 1) {
      return str + ' Open Issue';
    } else {
      return str + ' Open Issues';
    }
  },

  _customersAcquiredStr() {
    var months = Object.values(this.parsedIssues.issuesByMonth);
    var customersAcquired = months[months.length - 1]

    if (customersAcquired == 1) {
      return customersAcquired + ' Customer Acquired'
    } else {
      return customersAcquired + ' Customers Acquired'
    }
  },

  render() {
    return (
      <div className="metrics">
        <div className="page-title">
          <h1>Metrics</h1>
        </div>

        <div className="row">
          <div className="col-md-5">
            <CustomersAcquiredGraph customers={ this.props.customers } />
          </div>

          <div className="col-md-5 col-md-offset-1">
            <ReportedIssuesChart issuesByMonth={ this.parsedIssues.issuesByMonth } />
          </div>
        </div>

        <div className="data-widgets">
          <div className="row">
            <div className="col-md-3">
              <DataWidget data={ this._openIssuesStr() } />
            </div>
            <div className="col-md-3 col-md-offset-1">
              <DataWidget data={ this._customersAcquiredStr() } />
            </div>
            <div className="col-md-3 col-md-offset-1">
              <DataWidget data={ "28 Closed Issues" } />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Metrics;