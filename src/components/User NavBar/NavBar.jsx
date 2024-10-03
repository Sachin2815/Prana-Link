import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/images/Homepage/logo.svg';
import Buttons from '../Button/button';
import { Login, Signup } from '../../Pages/Signup Pages/auth';

const NavBar = () => {
  const [hidepass, sethidepass] = useState(true);
  return (
    <div className="user-navbar">
      <div className="user-navbar-left">
        <img
          draggable="false"
          style={{
            width: '35px',
            objectFit: 'contain',
          }}
          src={logo}
          alt=""
        />
        <div className="user-navbar-logo">PRANA LINK</div>
      </div>

      <div className="user-navbar-right">
        <ul className="user-navbar-links">
          <div className="user-navbar-link">Home</div>
          <div className="user-navbar-link">Services</div>
          <div className="user-navbar-link">Product</div>
          <div className="user-navbar-link">About us</div>
        </ul>
        <div className="nav-btns">
          {/* <Buttons name={'LOGIN'}>
            <Login hidepass={hidepass} sethidepass={setHidepass} />
          </Buttons>

          <Buttons name={'Sign up'}>
            <Signup hidepass={hidepass} sethidepass={setHidepass} />
          </Buttons> */}
          <Buttons name={'Sign Up'}>
            <Signup hidepass={hidepass} sethidepass={sethidepass} />
          </Buttons>
          <Buttons name={'Login'}>
            <Login hidepass={hidepass} sethidepass={sethidepass} />
          </Buttons>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
