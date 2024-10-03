import React from 'react';
import './Hero.css';
import doctorImg from '../../../assets/images/Homepage/doctor-img.png';
import chakra from '../../../assets/images/Homepage/chakra.png';

const Hero = () => {
  return (
    <div className="home-hero">
      <div className="home-left">
        <div className="home-heading">
          <h1 className="home-heading-subcontent">Bringing Together </h1>
          <h1 className="home-heading-subcontent main">Spirituality and</h1>
          <h1 className="home-heading-subcontent main">HealthCare</h1>
        </div>
        <div className="home-content">
          In times like today, your health is very important, especially since
          the number of COVID-19 cases is increasing day by day, so we are ready
          to help you with your health consultation
        </div>
        <div className="home-btns">
          {/* <Buttons name={'Book an Appointment'} /> */}
          <div className="home-btn">Book an Appointment</div>
        </div>
        <div className="home-numbers-container">
          {templates({ name: '200', content: 'Active Healers' })}
          {templates({ name: '15K', content: 'Active Users' })}
          {templates({ name: '50', content: 'Active Pharmacy' })}
        </div>
      </div>
      <div className="home-right">
        <div className="home-right-inner">
          <img draggable="false" src={doctorImg} alt="doctor" />
        </div>
        <div className="home-right-inner-upper">
          <img src={chakra} alt="chakra" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

const templates = ({ name, content }) => {
  return (
    <div className="home-numbers">
      <div className="home-numbers-1">
        {name} <span>+</span>
      </div>
      <div className="home-numbers-2">{content}</div>
    </div>
  );
};
