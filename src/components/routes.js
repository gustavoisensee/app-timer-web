import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import ResetPassword from './ResetPassword';

const routes = () => (
  <Router>
    <Fragment>
      <Route path='/account/reset-password' component={ResetPassword} />
      <Route path='*' component={Home} />
    </Fragment>
  </Router>
);

export default routes;
