import React from 'react';

import EmployeeMap from './home/EmployeeMap';

const Home = React.createClass({
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