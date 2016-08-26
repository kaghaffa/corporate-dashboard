import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Home from './Home'

function mapStateToProps(state) {
  return {
    customers: state.customers,
    issues: state.issues,
    locations: state.locations
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

const App = connect(mapStateToProps, mapDispatchToProps)(Home);

export default App;