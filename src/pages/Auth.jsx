import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUsersAsync} from '../features/user/userSlice';
import {useNavigate} from 'react-router';

const Auth = () => {
  const history = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  useEffect(() => {
    isAuth && history('/');
    // eslint-disable-next-line
  }, [isAuth]);
  return (
    <main className="page__main page__main--login page--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action="#"
            method="post"
            onSubmit={(evt) => {
              evt.preventDefault();
              const userData = {
                email: email,
                password: password,
              };
              dispatch(
                getUsersAsync({
                  url: '/login',
                  data: userData,
                })
              );
            }}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required=""
                onChange={(evt) => {
                  const emailInputValue = evt.target.value;
                  setEmail(emailInputValue);
                }}
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required=""
                onChange={(evt) => {
                  const passwordInputValue = evt.target.value;
                  setPassword(passwordInputValue);
                }}
              />
            </div>
            <button className="login__submit form__submit button" type="submit">
              Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="some/valid/url">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Auth;
