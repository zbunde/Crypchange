// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Users from './containers/Users';
import User from './containers/User';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Users} />
     <Route path="/:id" component={User} />
  </Route>
)
