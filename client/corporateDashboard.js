import React from 'react';
import { render } from 'react-dom';

// Import css
import css from './styles/style.styl'

// Import components
import App from './components/App'
import Home from './components/Home'
import Issues from './components/Issues'
import Metrics from './components/Metrics'

// Import react router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store'

const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home }></IndexRoute>
        <Route path="/issues" component={ Issues }></Route>
        <Route path="/metrics" component={ Metrics }></Route>
        <Route path='*' component={ Home } />
      </Route>
    </Router>
  </Provider>
);


render(router, document.getElementById('root'));
