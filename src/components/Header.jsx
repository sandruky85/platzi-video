import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

import '../assets/styles/components/Header.scss';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          { hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt='User' />
          )}

          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href='/'>Cuenta</a>
          </li>
          <li>
            <a href='/'>Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);
