import React from 'react';
import './Hero.css';
import image from '../public/image.jpg'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">WE THINK, WE DO</h1>
          <p className="hero-description">
            We are the team of Decentralized Personal Health Record application. This application manages all records of patients through blockchain.
          </p>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img className="hero-image" src={image} alt="Team" />
          </div>
        </div>
      </div>
      <div className="hero-gradient"></div>
      <div className="hero-svg">
        <svg width="1200" height="135" viewBox="0 0 1201 135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M1 67.2686C52.5 -15.7319 141 -10.7319 187.5 67.2686C234 145.269 325.5 160.269 397 67.2686C468.5 -25.7319 568 15.7682 598 75.7682C628 135.768 744.5 172.268 801 67.2686C857.5 -37.7307 955.5 -2.73196 999 67.2686C1042.5 137.269 1140 155.268 1200 67.2686" 
            stroke="url(#paint0_linear_5_3)"
          />
          <defs>
            <linearGradient id="paint0_linear_5_3" x1="1" y1="67.396" x2="1200" y2="67.396" gradientUnits="userSpaceOnUse">
              <stop stopColor="#578ECF" />
              <stop offset="1" stopColor="#4CB35D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Hero;