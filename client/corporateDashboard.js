import React from 'react';
import { render } from 'react-dom';

// Import css
import css from './styles/style.styl'

// Import components
import App from './components/App'

// Import react router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store'

const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
      </Route>
    </Router>
  </Provider>
);


render(router, document.getElementById('root'));
