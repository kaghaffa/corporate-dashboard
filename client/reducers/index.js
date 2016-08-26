import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import reducers
import customers from './customers';
import issues from './issues';
import locations from './locations';

const rootReducer = combineReducers(
  {
    customers,
    issues,
    locations,
    routing: routerReducer
  }
);

export default rootReducer;