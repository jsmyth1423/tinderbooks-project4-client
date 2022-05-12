import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getLoggedInUserId } from '../lib/auth';

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <nav className="navbar is-black">
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link has-text-white">
            Swipe
          </a>

          <div className="navbar-dropdown">
            <Link to='/games'>
              <a className="navbar-item">
                Games
              </a>
            </Link>
            <a className="navbar-item">
              Books
            </a>
            <hr className="navbar-divider" />
            <Link to='/'><a className='navbar-item'>Home</a></Link>
          </div>
        </div>
        <Link to='/swipedGames' className='navbar-item has-text-white'>Swiped Games</Link>
        <div className="navbar-end">
          {!getLoggedInUserId() && (
            <Link to='/login' className="navbar-item has-text-white">Login</Link>
          )}
          {!getLoggedInUserId() && (
            <Link to='/register' className="navbar-item has-text-white">Register</Link>
          )}
        </div>
        {getLoggedInUserId() && (
          <div className='navbar-end'>
            <Link to='/' className='navbar-item' onClick={logout}>
              <p>Logout</p>
            </Link>
          </div>
        )}
      </nav>
    </>
  );

};


export default Navbar;