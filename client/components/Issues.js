import React from 'react';
import { Table, Column, Cell } from 'fixed-data-table';

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
    return (
      <div className="issues">
        <div className="page-title">
          <h1>Issues</h1>
        </div>

        <Table
          rowHeight={50}
          rowsCount={this.props.issues.length}
          width={1050}
          maxHeight={1000}
          headerHeight={50}>
          <Column
            header={<Cell>Opened</Cell>}
            cell={({rowIndex, ...props}) => (
              <Cell {...props}>
                {
                  this._mergeTimestampStr(
                    this.props.issues[rowIndex].open_date,
                    this.props.issues[rowIndex].open_time
                  )
                }
              </Cell>
            )}
            width={175}
          />
          <Column
            header={<Cell>Closed</Cell>}
            cell={({rowIndex, ...props}) => (
              <Cell {...props}>
                {
                  this._mergeTimestampStr(
                    this.props.issues[rowIndex].closed_date,
                    this.props.issues[rowIndex].closed_time
                  )
                }
              </Cell>
            )}
            width={175}
          />
          <Column
            header={<Cell>Customer Name</Cell>}
            cell={({rowIndex, ...props}) => (
              <Cell {...props}>
                {this.props.issues[rowIndex].customer_name}
              </Cell>
            )}
            width={175}
          />
          <Column
            header={<Cell>Email</Cell>}
            cell={({rowIndex, ...props}) => (
              <Cell {...props}>
                {this.props.issues[rowIndex].email}
              </Cell>
            )}
            width={175}
          />
          <Column
            header={<Cell>Status</Cell>}
            cell={({rowIndex, ...props}) => (
              <Cell {...props}>
                {this.props.issues[rowIndex].status}
              </Cell>
            )}
            width={175}
          />
          <Column
            header={<Cell>Employee Name</Cell>}
            cell={({rowIndex, ...props}) => (
              <Cell {...props}>
                {this.props.issues[rowIndex].employee_name}
              </Cell>
            )}
            width={175}
          />
        </Table>
      </div>
    );
  }
});

export default Issues;