import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/images/Homepage/logo.svg';
import Buttons from '../Button/button';
import { Login, Signup } from '../../Pages/Signup Pages/auth';

const Navbar = () => {
  const [hidepass, sethidepass] = useState(true);
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          draggable="false"
          style={{
            width: '35px',
            objectFit: 'contain',
          }}
          src={logo}
          alt=""
        />
        <div className="navbar-logo">PRANA LINK</div>
      </div>

      <div className="navbar-right">
        <ul className="navbar-links">
          <div className="navbar-link">Home</div>
          <div className="navbar-link">Services</div>
          <div className="navbar-link">Product</div>
          <div className="navbar-link">About us</div>
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

export default Navbar;
