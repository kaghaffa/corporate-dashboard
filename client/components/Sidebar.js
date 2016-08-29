import React from 'react';
import { Link } from 'react-router';

const Sidebar = React.createClass({
  render() {
    return (
      <div className="sidebar">
        <ul className="nav nav-sidebar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/metrics">Metrics</Link></li>
          <li><Link to="/issues">Issues</Link></li>
        </ul>
      </div>
    );
  }
});

export default Sidebar;