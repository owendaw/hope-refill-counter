// components/App.js

import React, { useState, useEffect } from 'react';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import '../index.css';
// import { fetchBottles, fetchEmissions } from '../services/api';
import { fetchFluidOunces } from '../services/api';

function App() {
  const [bottles, setBottles] = useState(0);
  const [emissions, setEmissions] = useState(0);

  useEffect(() => {
    const fetchFluidOuncesInterval = setInterval(async () => {
      try {
        const total_flow = await fetchFluidOunces();
        const bottles = Math.round(total_flow / 16.9);
        const emissions = total_flow;
        setBottles(bottles);
        setEmissions(emissions);
      } catch (error) {
        console.error(error);
      }
    }, 5000);

    // const fetchEmissionsInterval = setInterval(async () => {
    //   try {
    //     const data = await fetchEmissions();
    //     setEmissions(data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }, 5000);

    return () => {
      clearInterval(fetchFluidOuncesInterval);
      // clearInterval(fetchBottlesInterval);
      // clearInterval(fetchEmissionsInterval);
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
