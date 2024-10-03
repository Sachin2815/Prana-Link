import React from 'react';
import './services.css';
import chatDoctor from '../../../../assets/images/main services/doctor-img.svg';
import medicines from '../../../../assets/images/main services/medicines.svg';
import hospital from '../../../../assets/images/main services/hospital.svg';

const Services = () => {
  const cards = services.map((card) => (
    <Cards img_url={card.img_url} heading={card.heading} desc={card.desc} />
  ));
  
  return (
    <>
      <div className="services-heading">
        <h1 className="services-heading-content">
          Our <span>Main Services</span>
        </h1>
        <h1 className="services-heading-content">Categories</h1>
      </div>
      <div className="services-cards-container">{cards}</div>
    </>
  );
};

const Cards = ({ img_url, heading, desc }) => {
  return (
    <div className="services-cards">
      <div className="services-cards-img">
        <img draggable="false" src={img_url} alt="doctor" />
      </div>
      <div className="services-cards-subcontent">
        <div className="cards-subcontent-heading">{heading}</div>
        <div className="cards-subcontent-description">{desc}</div>
      </div>
    </div>
  );
};

const services = [
  {
    img_url: chatDoctor,
    heading: 'Chat with Healer',
    desc: 'You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.',
  },
  {
    img_url: medicines,
    heading: 'Health Store',
    desc: "Talk about the health complaints you are experiencing and don't hesitate to ask about the proper treatment",
  },
  {
    img_url: hospital,
    heading: 'Visit Hospitals',
    desc: 'Get priority services in hospitals with Haidoc. Which allows you to go to the hospital more practically and save time.',
  },
];

export default Services;
