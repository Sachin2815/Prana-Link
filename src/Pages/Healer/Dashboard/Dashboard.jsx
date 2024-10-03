import React from 'react';
import './Dashboard.css';
import NavBar from './NavBar/NavBar';
// import { Chart } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import profilepic from '../../../assets/images/user page/doctorImg.jpg';

const Healer = () => {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="nav">
          <div className="nav-left">
            <h3>
              Good Morning &nbsp;
              <span>Vikram Singh</span>
            </h3>
          </div>

          <div className="nav-right">
            <div className="icons">
              <div className="notification-icon">
                <i className="fa-regular fa-bell"></i>
              </div>
            </div>
            <div className="display-healer-profile">
              <div className="profile-pic">
                <img src={profilepic} alt="profile-img" />
              </div>
              <div className="profile-name">Vikram Singh</div>
            </div>
          </div>
        </div>
        <div className="dashboard-section-1">
          <div className="dashboard-heading">
            <h2>Dashboard</h2>
          </div>
          <div className="dashboard-date">
            <i className="fa-solid fa-calendar-days"></i> &nbsp;26 Aug
          </div>
        </div>
        <div className="dashboard-section-2">
          <div className="total-paitents">
            <ShowDonutChart />
          </div>
          <div className="patient-details">
            <div className="patient-details-heading">
              <h2>Patients Statistics</h2>
            </div>

            <div className="paitent-stats">
              <div className="paitents">
                <p>New Patients</p>
                54
              </div>
              <div className="paitents">
                <p>Old Patients</p>
                32
              </div>
            </div>
          </div>
          {/* <div className="event-wrapper">
            <h1>Events</h1>
            <div className="event-list">
              <EventCard />
              <EventCard />
            </div>
          </div> */}
        </div>
        <div className="dashboard-section-3">
          <div className="graph-analysis">
            <h2>Analytics</h2>
            <ShowAreaChart />
          </div>
          <div className="graph-analysis">
            <h2>Analytics</h2>
            <ShowBarChart />
          </div>

          {/* <div className="event-wrapper">
            <h1>Your Patient Today</h1>
            <PatientListCard />
            <PatientListCard />
            <PatientListCard />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Healer;

const EventCard = () => {
  return (
    <div className="event-card-1">
      <div className="event-card-heading">
        <p>Team meeting</p>
        13:30-14:50
      </div>
      <div className="event-card-icons">
        <img src={profilepic} alt="" />
        <img src={profilepic} alt="" />
        <img src={profilepic} alt="" />
      </div>
    </div>
  );
};

const PatientListCard = () => {
  return (
    <div className="paitent-list-item">
      <div className="paitent-list-item-image">
        <img src={profilepic} alt="" />
      </div>
      <div className="paitent-name">Samantha Maria</div>
      <div className="setting-icon">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

const ShowDonutChart = () => {
  const series = [70];
  const options = {
    labels: ['OPD '],

    fill: { colors: ['#007299'] },
  };
  return (
    <ReactApexChart
      width="100%"
      type="radialBar"
      series={series}
      options={options}
    />
  );
};

const ShowAreaChart = () => {
  const series = [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ];
  const options = {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    stroke: {
      curve: 'smooth',
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: 'Series 1',
        data: [45, 52, 38, 45, 19, 23, 2],
      },
    ],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: ['01 ', '02 ', '03 ', '04 ', '05 ', '06 ', '07 '],
    },
  };
  return (
    <ReactApexChart
      height="350px"
      series={series}
      options={options}
      width="100%"
    />
  );
};

const ShowBarChart = () => {
  const series = [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ];
  const options = {
    chart: {
      type: 'column',
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    stroke: {
      curve: 'smooth',
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: 'Series 1',
        data: [45, 52, 38, 45, 19, 23, 2],
      },
    ],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: ['01 ', '02 ', '03 ', '04 ', '05 ', '06 ', '07 '],
    },
  };
  return (
    <ReactApexChart
      height="350px"
      series={series}
      options={options}
      width="100%"
    />
  );
};
