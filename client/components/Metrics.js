import React from 'react';

import CustomersAcquiredGraph from './metrics/CustomersAcquiredGraph';
import ReportedIssuesChart from './metrics/ReportedIssuesChart';
import DataWidget from './metrics/DataWidget';

const Metrics = React.createClass({
  propTypes: {
  },

  render() {
    console.log(this.props)
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
            <ReportedIssuesChart />
          </div>
        </div>

        <div className="data-widgets">
          <div className="row">
            <div className="col-md-3">
              <DataWidget data={ "15 Open Issues" } />
            </div>
            <div className="col-md-3 col-md-offset-1">
              <DataWidget data={ "15 Open Issues" } />
            </div>
            <div className="col-md-3 col-md-offset-1">
              <DataWidget data={ "15 Open Issues" } />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Metrics;