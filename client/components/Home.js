import React from 'react';

import EmployeeMap from './home/EmployeeMap';

const Home = React.createClass({
  componentWillMount() {
    var _this = this;
    var useCsv = true;
    this.interval = setInterval(function() {
      useCsv = !useCsv
      _this.props.updateLocations(useCsv);
    }, 3000);
  },

  componentWillUnmount() {
    clearInterval(this.interval)
  },

  render() {
    return (
      <div className="home">
        <div className="page-title">
          <h1>Home</h1>
          <EmployeeMap locations={ this.props.locations } />
        </div>
      </div>
    );
  }
});

export default Home;