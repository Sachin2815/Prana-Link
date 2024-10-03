import React from 'react';
import './User.css';
import NavBar from '../../components/User NavBar/NavBar';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase } from '@mui/material';
import HomeCard from './component/Healer List/Healer';
import TestimonialCard from './component/Testimonials/Testimonial';

const User = () => {
  const styles = {
    background: '#fff',
    borderRadius: '20px',
    color: ' #000',
    padding: '12px 21px',
    fontSize: '17px',
    width: '100%',
  };

  const style1 = {
    background: '#fff',
    width: '60px',
    fontSsize: '23px',
    color: '#000',
  };
  return (
    <>
      <NavBar />
      <div className="bg-holder"></div>
      <div className="user-wrapper">
        <div className="user-hero-section">
          <div className="user-hero-heading">
            <p>
              The <span> Healing </span>Journey
            </p>
            Starts Here
          </div>
          <div className="user-hero-search">
            <InputBase
              sx={{ ml: 1, flex: 1, ...styles }}
              placeholder="Find Your Healer"
              inputProps={{ 'aria-label': 'Find Your Healer' }}
            />
            <IconButton
              type="button"
              sx={{ p: '10px', ...style1 }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </div>
        </div>
        <div className="user-healer-container">
          <div className="user-healer-heading">
            Our <span>Healers</span>
          </div>
          <div className="user-healer-list">
            {[...Array(3)].map((card, index) => {
              return <HomeCard key={index} />;
            })}
          </div>
        </div>

        <div className="user-healer-testimonials-wrapper">
          <div className="user-healer-testimonial-title">
            <h1>What People Say About Us</h1>
            <h1>Matters the Most</h1>
          </div>
          <div className="user-healer-testimonial-subtitle">
            <h3>Testimonials</h3>
          </div>
          <div className="user-healer-testimonial-container">
            {[...Array(3)].map((card, index) => {
              return <TestimonialCard key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
