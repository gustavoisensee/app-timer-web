import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './pages/App';
import ResetPassword from './pages/ResetPassword';
import CreateUser from './pages/CreateUser';
import Logout from './pages/Logout';
import {
  ACCOUNT_LOGOUT,
  ACCOUNT_RESET_PASSWORD,
  ACCOUNT_CREATE
} from '../constants/routes';
import Container from './atoms/Container/Container';

const routes = () => (
  <Router>
    <Container>
      <Switch>
          <Route exact path={ACCOUNT_LOGOUT} component={Logout} />
          <Route exact path={ACCOUNT_RESET_PASSWORD} component={ResetPassword} />
          <Route exact path={ACCOUNT_CREATE} component={CreateUser} />
          <Route path='*' component={App} />
      </Switch>
    </Container>
  </Router>
);

export default routes;
