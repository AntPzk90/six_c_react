import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {getItem} from '../../helpers/persistanceStorage';

const Header = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const userInfo = getItem('user');
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img
                className="header__logo"
                src={'/img/logo.svg'}
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {!isAuth && (
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to="/auth"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Sign in
                    </span>
                  </Link>
                )}
                {isAuth && (
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to="/favorite"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                      {userInfo && (
                        <img
                          className="user__avatar"
                          src={userInfo.avatarUrl}
                          alt={'user'}
                        />
                      )}
                    </div>
                    <span className="header__user-name user__name">
                      {userInfo && userInfo.name}
                    </span>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
