import React, { PureComponent } from 'react';
import jwt from 'jsonwebtoken';
import { retrieveData, removeData } from '../../services/storage';
import { USER } from '../../constants/storageKeys';
import { HOME } from '../../constants/routes';
import './styles.scss';

class Logout extends PureComponent {
  state = {
    seconds: 9
  }

  componentDidMount() {
    const { history } = this.props;
    const user = retrieveData(USER);
    const hasToken = (user && !!user.token);
    const isLogged = (hasToken ? !!jwt.decode(user.token) : null);

    if (isLogged) {
      removeData(USER);
    } else {
      history.push(HOME);
    }

    this.logoutInterval = setInterval(() => this.setState({
      seconds: this.state.seconds - 1
    }), 1000);

    setTimeout(() => {
      history.push(HOME);
    }, 9000);
  }

  componentWillUnmount() {
    clearInterval(this.logoutInterval);
  }

  handleLogout = () => {
    const { history } = this.props;
    history.push(HOME);
  }

  render() {
    const { seconds } = this.state;
    
    return (
      <div className="Logout">
        <span>You are logged out!</span>
        <span>{`You will be redirected to Login page in ${seconds} seconds.`}</span>
        <button type="button" onClick={this.handleLogout}>Go to Login</button>
      </div>
    );
  }
}

export default Logout;
