import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const Issues = React.createClass({
  propTypes: {
    issues: React.PropTypes.array
  },

  _mergeTimestampStr(date, time) {
    if (date && time) {
      return date + ' ' + time;
    }
  },

  componentWillMount() {
    var _this = this;
    var useCsv = true;
    this.interval = setInterval(function() {
      useCsv = !useCsv
      _this.props.updateIssues(useCsv);
    }, 3000);
  },

  componentWillUnmount() {
    clearInterval(this.interval)
  },

  render() {
    var issuesData = this.props.issues.map(function(issue) {
      return {
        opened: this._mergeTimestampStr(issue.open_date, issue.open_time),
        closed: this._mergeTimestampStr(issue.closed_date, issue.closed_time),
        customer_name: issue.customer_name,
        id: issue.id,
        email: issue.email,
        status: issue.status,
        employee_name: issue.employee_name,
        description: issue.description
      };
    }, this);

    return (
      <div className="issues">
        <div className="page-title">
          <h1>Issues</h1>
        </div>

        <div className="issues-table">
          <BootstrapTable data={issuesData}
            striped={true}
            condensed={true}
            search={true}
            hover={true}>
            <TableHeaderColumn dataField="opened" isKey={true} dataAlign="center" width="160">
              Opened
            </TableHeaderColumn>
            <TableHeaderColumn dataField="closed" dataAlign="center" width="150">
              Closed
            </TableHeaderColumn>
            <TableHeaderColumn dataField="customer_name" dataAlign="center" width="150">
              Customer
            </TableHeaderColumn>
            <TableHeaderColumn dataField="email" dataAlign="center" width="200">
              Email
            </TableHeaderColumn>
            <TableHeaderColumn dataField="status" dataAlign="center" width="65">
              Status
            </TableHeaderColumn>
            <TableHeaderColumn dataField="employee_name" dataAlign="center" width="150">
              Employee
            </TableHeaderColumn>
            <TableHeaderColumn dataField="description" dataAlign="center" width="120">
              Description
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
});

export default Issues;