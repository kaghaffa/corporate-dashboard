import React from 'react';

const DataWidget = React.createClass({
  propTypes: {
    data: React.PropTypes.string
  },

  render() {
    return (
      <div className="data-widget card">
        <div className="content text-center">
          <h4>{ this.props.data }</h4>
        </div>
      </div>
    )
  }
});

export default DataWidget;