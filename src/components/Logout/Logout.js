import React, { PureComponent } from 'react';
import jwt from 'jsonwebtoken';
import { retrieveData, removeData } from '../../services/storage';
import { USER } from '../../constants/storageKeys';
import { HOME } from '../../constants/routes';
import './styles.scss';

class Logout extends PureComponent {
  state = {
    loggedOut: false,
  }

  componentDidMount() {
    const user = retrieveData(USER);
    const hasToken = (user && !!user.token);
    const isLogged = (hasToken ? !!jwt.decode(user.token) : null);

    if (isLogged) {
      removeData(USER);
    } else {
      const { history } = this.props;
      history.push(HOME);
    }
    this.setState({ loggedOut: true });
  }

  handleLogout = () => {
    const { history } = this.props;
    history.push(HOME);
  }

  render() {
    const { loggedOut } = this.state;
    
    return (
      <div className="Logout">
        <span>{loggedOut ? 'Logged out' : 'Logging out...'}</span>
        {loggedOut && <button type="button" onClick={this.handleLogout}>Go to Login</button>}
      </div>
    );
  }
}

export default Logout;
