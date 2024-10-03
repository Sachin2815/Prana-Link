import React from 'react';
import './services.css';
import aura from '../../../../assets/images/special services/aura.svg';
import chakra from '../../../../assets/images/special services/chakra.svg';
import crystal from '../../../../assets/images/special services/crystal.png';
import energy from '../../../../assets/images/special services/energy.png';
import main from '../../../../assets/images/special services/main.jpg';

const SpecialServices = () => {
  const Details = services.map((service, index) => (
    <SpecialServiceCard
      key={index}
      url={service.url}
      heading={service.card_heading}
      desc={service.card_desc}
    />
  ));
  return (
    <div className="special-services-wrapper">
      <div className="special-services-image">
        <img src={main} alt="main body" />
      </div>
      <div className="special-services-container">
        <div className="special-services-heading">
          Our <span>Special Services</span>
        </div>
        <div className="special-services-description">
          In times like today, your health is very important, especially since
          the number of COVID-19 cases is increasing day by day, so we are ready
          to help you with your health consultation
        </div>
        <div className="special-services-cards">{Details}</div>
      </div>
    </div>
  );
};

const SpecialServiceCard = ({ url, heading, desc }) => {
  return (
    <div className="special-services-card">
      <div className="special-services-card-logo">
        <div
          className={
            heading === 'Aura Healing' ? 'extra-class-1' : 'extra-class'
          }
        >
          <img draggable="false" src={url} alt="" />
        </div>
      </div>
      <div className="special-servies-card-desc">
        <div className="special-services-card-heading">{heading}</div>
        <div className="special-services-card-content">{desc}</div>
      </div>
    </div>
  );
};

const services = [
  {
    url: aura,
    card_heading: 'Aura Healing',
    card_desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. ',
  },
  {
    url: chakra,
    card_heading: 'Chakra Healing',
    card_desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. ',
  },
  {
    url: crystal,
    card_heading: 'Crystal Healing',
    card_desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. ',
  },
  {
    url: energy,
    card_heading: 'Energy Healing',
    card_desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. ',
  },
];

export default SpecialServices;
