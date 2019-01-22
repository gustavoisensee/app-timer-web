import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ResetPassword from './ResetPassword';

const routes = () => (
  <Router>
    <Switch>
      <Route exact path='/account/reset-password' component={ResetPassword} />
      <Route path='*' component={Home} />
    </Switch>
  </Router>
);

export default routes;
