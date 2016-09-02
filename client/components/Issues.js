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

  render() {
    var issuesData = this.props.issues.map(function(issue) {
      return {
        opened: this._mergeTimestampStr(issue.open_date, issue.open_time),
        closed: this._mergeTimestampStr(issue.closed_date, issue.closed_time),
        customer_name: issue.customer_name,
        id: issue.id,
        email: issue.email,
        status: issue.status,
        employee_name: issue.employee_name
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
            <TableHeaderColumn dataField="id" isKey={true} dataAlign="center">
              ID
            </TableHeaderColumn>
            <TableHeaderColumn dataField="opened" dataAlign="center">
              Opened
            </TableHeaderColumn>
            <TableHeaderColumn dataField="closed" dataAlign="center">
              Closed
            </TableHeaderColumn>
            <TableHeaderColumn dataField="customer_name" dataAlign="center">
              Customer Name
            </TableHeaderColumn>
            <TableHeaderColumn dataField="email" dataAlign="center">
              Email
            </TableHeaderColumn>
            <TableHeaderColumn dataField="status" dataAlign="center">
              Status
            </TableHeaderColumn>
            <TableHeaderColumn dataField="employee_name" dataAlign="center">
              Employee Name
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
});

export default Issues;