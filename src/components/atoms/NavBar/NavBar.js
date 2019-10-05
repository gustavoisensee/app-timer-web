import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

const NavBar = ({ user }) => (
  <div className="NavBar">
    <div>NavBar</div>
    {user &&
      <div className="NavBar_name">
        <span>{user.user.name}</span>
        <Link to='/account/logout'>Logout</Link>
      </div>
    }
  </div>
);

NavBar.propTypes = {
  user: PropTypes.object
};

export default NavBar;
