import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <div>
        {Auth.loggedIn() ? (
          <>
            <Link to="/profile" className="btn bg-primary btn-sm btn-info m-2">
              {Auth.getProfile().data.username}'s profile
            </Link>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-lg btn-light m-2">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
