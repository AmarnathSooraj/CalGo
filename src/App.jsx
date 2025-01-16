import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './Components/Loader/Loader.jsx';
import Home from './Components/Home/Home.jsx';
import Card from './Components/Card/Card.jsx';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    // Show the loader for 400ms
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    // Cycle through heroCount every 3 seconds after the loader
    const heroTimer = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);

    // Cleanup timers on unmount
    return () => {
      clearTimeout(loaderTimer);
      clearInterval(heroTimer);
    };
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Loader /> // Show loader when loading
      ) : (
        <Routes>
          <Route path="/" element={<Home heroCount={heroCount} />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
