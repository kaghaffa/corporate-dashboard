import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import reducers

const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;