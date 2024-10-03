import React, { useState } from 'react';
import eyeoff from '../../assets/images/form/eye-off.svg';
import eyeon from '../../assets/images/form/eye-on.svg';
import googleSvg from '../../assets/images/form/google.svg';
import info from '../../assets/images/form/info.svg';
import { Stack } from '@mui/material';
import { createAccount, login, oauthGoogle } from '../../api/Auth/appWriteAuth';

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  bgcolor: 'background.paper',
  boxShadow: 24,
  textAlign: 'center',
  p: 4,
  borderRadius: '27px',
};

export const Signup = ({ hidepass, sethidepass }) => {
  const [userDetails, setUserDetails] = useState({});

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
    createAccount(userDetails)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Stack sx={styles}>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-heading">
          <h3>Sign Up!!</h3>
          <p
            style={{
              marginTop: '13px',
            }}
          >
            Create an account to continue.
          </p>
        </div>
        <div className="form-inputs">
          <div className="form-input-1">
            <p className="form-input-label">Name</p>
            <input
              name="name"
              type="text"
              required
              placeholder="Enter your Name"
              onChange={handleChange}
            />
          </div>
          <div className="form-input-1">
            <p className="form-input-label">Email</p>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your Email"
              onChange={handleChange}
            />
          </div>
          <div className="form-input-2">
            <p className="form-input-label">Password</p>
            <div className="input-password-section">
              <input
                name="password"
                type={hidepass ? 'password' : 'text'}
                required
                placeholder="Enter Password"
                onChange={handleChange}
              />
              <img
                src={hidepass ? eyeoff : eyeon}
                className="toggle-password-visibility"
                alt="eye"
                onClick={() => sethidepass(!hidepass)}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            justifyContent: 'center',
          }}
          className="form-forgot-password"
        >
          <div
            style={{
              gap: '13px',
            }}
            className="form-remember"
          >
            <input required type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">I Agree to terms and conditions</label>
          </div>
        </div>
        <div className="form-btns">
          <button className="btn form-submit" type="submit">
            Sign up
          </button>
        </div>
      </form>
      <button
        onClick={() => {
          oauthGoogle()
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }}
        className="btn form-google"
      >
        <img src={googleSvg} alt="google" />
        <span> Sign up with Google</span>
      </button>
    </Stack>
  );
};

export const Login = ({ hidepass, sethidepass }) => {
  const [password, setPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
    login(userDetails)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return !password ? (
    <Stack sx={styles}>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-heading">
          <h3>Welcome Back!</h3>
          <p
            style={{
              marginTop: '13px',
            }}
          >
            We missed you! Please Enter your details.
          </p>
        </div>
        <div className="form-inputs">
          <div className="form-input-1">
            <p className="form-input-label">Email</p>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your Email"
              onChange={handleChange}
            />
          </div>
          <div className="form-input-2">
            <p className="form-input-label">Password</p>
            <div className="input-password-section">
              <input
                name="password"
                type={hidepass ? 'password' : 'text'}
                required
                placeholder="Enter Password"
                onChange={handleChange}
              />
              <img
                src={hidepass ? eyeoff : eyeon}
                className="toggle-password-visibility"
                alt="eye"
                onClick={() => sethidepass(!hidepass)}
              />
            </div>
          </div>
        </div>
        <div className="form-forgot-password">
          <div className="form-remember">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <span onClick={() => setPassword(false)}>Forgot password?</span>
        </div>
        <div className="form-btns">
          <button className="btn form-submit" type="submit">
            Sign in
          </button>
        </div>
      </form>
      <button
        onClick={() => {
          oauthGoogle()
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }}
        className="btn form-google"
      >
        <img src={googleSvg} alt="google" />
        <span> Sign in with Google</span>
      </button>
    </Stack>
  ) : (
    <ForgotPassword password={password} setPassword={setPassword} />
  );
};

export const ForgotPassword = ({ password, setPassword }) => {
  return (
    <Stack sx={styles}>
      <form className="form">
        <div className="form-heading">
          <h3>Forgot Password?</h3>
          <p style={{ marginTop: '13px' }}>
            No Worries! we'll send you the reset instructions.
          </p>
        </div>
        <div className="form-inputs">
          <div className="form-input-1">
            <p className="form-input-label">Email</p>
            <input type="text" required placeholder="Enter your Email" />
          </div>
        </div>
        <div className="form-info">
          <img src={info} alt="info" />
          <div className="form-info-content">
            We can't find correct address. Resend the email that you have
            registered
          </div>
        </div>

        <div className="form-btns">
          <button className="btn form-submit" type="submit">
            Send reset link
          </button>
        </div>
        <div className="form-sign">
          <p>
            Don't have an account?
            <a onClick={() => setPassword(true)}>Sign up</a>
          </p>
        </div>
      </form>
    </Stack>
  );
};
