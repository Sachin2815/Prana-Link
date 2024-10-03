import React from 'react';
import './NavBar.css';
import applications from '../../../../assets/images/Healer/applications.svg';
import analytics from '../../../../assets/images/Healer/analytics.svg';
import invoice from '../../../../assets/images/Healer/invoice.svg';
import settings from '../../../../assets/images/Healer/settings.svg';
import schedule from '../../../../assets/images/Healer/schedule.svg';
import logo from '../../../../assets/images/Homepage/logo.svg';

const NavBar = () => {
  return (
    <div className="user-sidebar">
      <div className="user-sidebar-logo">
        <img draggable="false" src={logo} alt="logo" />
        <p className="user-logo-text">PRANA LINK</p>
      </div>

      <div className="user-sidebar-content">
        <ul className="sidebar-content-list">
          <li className="user-sidebar-card user">
            <a className="sidebar-select active" href="#main-events">
              <img src={applications} className="sidebar-card-img" />
              <span className="sidebar-text">Dashboard</span>
            </a>
          </li>

          <li className="user-sidebar-card Schedule">
            <a className="sidebar-select" href="#schedule">
              <img src={analytics} className="sidebar-card-img" />
              <span className="sidebar-text">Schedule</span>
            </a>
          </li>

          <li className="user-sidebar-card invoice">
            <a className="sidebar-select" href="#past-events">
              <img src={invoice} className="sidebar-card-img" />
              <span className="sidebar-text">Past Treatments</span>
            </a>
          </li>

          <li className="user-sidebar-card Event-Photos">
            <a className="sidebar-select" href="#event-photos">
              <img src={schedule} className="sidebar-card-img" />
              <span className="sidebar-text">Testimonials</span>
            </a>
          </li>

          <li className="user-sidebar-card settings">
            <a className="sidebar-select" href="#">
              <img src={settings} className="sidebar-card-img" />
              <span className="sidebar-text">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
