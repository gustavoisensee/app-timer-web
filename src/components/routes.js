import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import ResetPassword from './ResetPassword';
import Logout from './Logout';
import {
  ACCOUNT_LOGOUT,
  ACCOUNT_RESET_PASSWORD
} from '../constants/routes';

const routes = () => (
  <Router>
    <Switch>
      <Route exact path={ACCOUNT_LOGOUT} component={Logout} />
      <Route exact path={ACCOUNT_RESET_PASSWORD} component={ResetPassword} />
      <Route path='*' component={App} />
    </Switch>
  </Router>
);

export default routes;
