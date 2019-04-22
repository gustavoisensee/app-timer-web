import React, { PureComponent } from 'react';
import Login from '../Login';
import './Home.scss';

const NavBar = () => (
  <div className="NavBar">
    Navbar
  </div>
);

class Home extends PureComponent {
  componentDidMount() {

  }
  render() {
    return (
      <div className="Home">
        <NavBar />
        <Login />
      </div>
    );
  }
}

export default Home;