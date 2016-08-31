import React from 'react';
import { Link } from 'react-router';

import Sidebar from './Sidebar'

const Main = React.createClass({
  componentDidMount() {
    var _this = this;
    var useCsv = true
    setInterval(function() {
      useCsv = !useCsv
      _this.props.updateCustomers(useCsv);
      _this.props.updateIssues(useCsv);
      _this.props.updateLocations(useCsv);
    }, 3000);
  },

  render() {
    return (
      <div className="main">
        <nav className="navbar navbar-transparent">
          <div className="container">
            <div className="navbar-header">
              <Link className="navbar-header" to="/">Corporate Dashboard</Link>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <Sidebar />
            </div>
            <div className="col-md-10">
              { React.cloneElement(this.props.children, this.props) }
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Main;