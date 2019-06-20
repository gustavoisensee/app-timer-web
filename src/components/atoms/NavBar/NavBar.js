import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const NavBar = ({ user }) => (
  <div className="NavBar">
    <div>NavBar</div>
    {user &&
      <div className="NavBar_name">
        <span>{user.user.name}</span>
        <a href='/account/logout'>Logout</a>
      </div>}

  </div>
);

NavBar.propTypes = {
  user: PropTypes.object
};

export default NavBar;
