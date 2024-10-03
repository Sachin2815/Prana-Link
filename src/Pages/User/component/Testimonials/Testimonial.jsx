import React from 'react';
import './Testimonial.css';
import img_1 from '../../../../assets/images/user page/Testimonials/img_1.jpg';
import inverted from '../../../../assets/images/user page/Testimonials/inverted.svg';

const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-heading">
        {/* <img src={inverted} width="50px" height="50px" alt="inverted" /> */}
        <h1>"</h1>
      </div>
      <div className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora
        quam perspiciatis consequuntur accusantium rerum nam inventore sequi et
        laborum!
      </div>
      <div className="hr"></div>
      <div className="testimonial-card-img">
        <img src={img_1} alt="logo" width="90px" height="90px" />
      </div>
    </div>
  );
};

export default TestimonialCard;
