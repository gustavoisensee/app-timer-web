import React, { PureComponent } from 'react';
import jwt from 'jsonwebtoken';
import { retrieveData } from '../../../services/storage';
import { USER } from '../../../constants/storageKeys';
import Login from '../Login';
import Dashboard from '../Dashboard';
import './styles.scss';

class App extends PureComponent {
  state = {
    isLogged: false
  }

  componentDidMount() {
    const user = retrieveData(USER);
    const hasToken = (user && !!user.token);
    const isLogged = (hasToken ? !!jwt.decode(user.token) : null);

    this.setState({ isLogged, user });
  }

  render() {
    const { isLogged, user } = this.state;
    return (
      <div className="App">
        {isLogged ?
          (<Dashboard user={user} />) :
          (<Login {...this.props} />)}
      </div>
    );
  }
}

export default App;