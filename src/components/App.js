// components/App.js

import React, { useState, useEffect } from 'react';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import '../index.css';
import { fetchFluidOunces } from '../services/api';

function App() {
  const [bottles, setBottles] = useState(0);
  const [emissions, setEmissions] = useState(0);

  const fetchAndUpdate = async () => {
    try {
      const total_flow = await fetchFluidOunces();
      const bottles = total_flow / 16.9;
      const emissions = bottles * 83;
      setBottles(Math.round(bottles));
      setEmissions(Math.round(emissions));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAndUpdate(); // fetch data immediately after the page loads

    const fetchFluidOuncesInterval = setInterval(fetchAndUpdate, 60000);

    return () => {
      clearInterval(fetchFluidOuncesInterval);
    };
  }, []);

  return (
    <div className="app">
      <LeftContainer bottles={bottles} emissions={emissions} />
      <RightContainer />
    </div>
  );
}

export default App;
