import React from 'react';
import collegeImg from '../assets/college.png'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-section">
        <img src={collegeImg} alt="ABES Campus" className="hero-image" />
      </div>
      <div className="right-section">
        <h1>ABES Engineering College</h1>
      </div>
    </div>
  );
};

export default Home;