import React, { useState, useEffect } from 'react';
import './Home.css';
import calgo from '../../assets/calgo.png';
import bg1 from './../../assets/header1.png';
import bg2 from './../../assets/header2.png';
import bg3 from './../../assets/header3.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Home = ({ heroCount }) => {
  const navigate = useNavigate(); // Initialize the navigate function
  const bgimg = [bg1, bg2, bg3];

  const handleGoButtonClick = () => {
    // Navigate to the /card route when the button is clicked
    navigate('/card');
  };

  return (
    <div className="container">
      <div className="main">
        <img src={bgimg[heroCount]} className="background" alt="Background" />
        <img src={calgo} className="logo" alt="CalGo Logo" />
      </div>

      <div className="btns-area">
        <select>
          <option>9am - 3pm</option>
          <option>9am - 7pm</option>
          <option>9am - 12am</option>
        </select>
        <select>
          <option>Destination Only</option>
          <option>Food Only</option>
          <option>Both</option>
        </select>
        <button onClick={handleGoButtonClick}>GO</button>
      </div>

      <div className="kozhi-feature">
        <p className="title">Kozhikode, The City of Spices</p>
        <p>
          Kozhikode, Kerala’s "City of Spices," offers serene beaches like
          Kozhikode Beach, scenic spots like Beypore and Thusharagiri Waterfalls,
          and cultural hubs like SM Street. Food lovers can savor Kozhikode
          biryani at Paragon or Rahmath Hotel and indulge in colorful halwas from
          Halwa Bazaar. A perfect blend of history, nature, and culinary delights
          awaits every traveler!
        </p>
      </div>
      <div className="Travel">
        <button>Need Parking?</button>
        <button>Need Vehicles?</button>
      </div>
    </div>
  );
};

export default Home;
