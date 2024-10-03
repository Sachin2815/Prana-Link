import React, { useState } from 'react';
import './Healer.css';
import profilePic from '../../../../assets/images/user page/doctorImg.jpg';

const HomeCard = () => {
  return (
    <div className="home-card">
      <div className="home-card-img">
        <img src={profilePic} alt="home-card" />
      </div>
      <div className="home-card-name">
        <h4 className="doctor-name">Dr. William Thompson</h4>
      </div>
      <hr className="hr-1" />
      <div className="home-card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, quisquam.
      </div>
      <div className="home-card-rating">
        <StarRating />
        <div className="home-card-rating-text">4.5</div>
        <div className="home-card-rating-text"> ( 20 Reviews )</div>
      </div>
    </div>
  );
};

export default HomeCard;

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            key={index}
            className={`${index <= (hover || rating) ? 'on' : 'off'} star-btn`}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
