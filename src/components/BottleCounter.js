import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Odometer from 'react-odometerjs';
import './BottleCounter.css';

const BottleCounter = () => {
  const [bottleCount, setBottleCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  useEffect(() => {
    const fetchBottleCount = async () => {
      const { data } = await axios.get('https://jh8bjmps9f.execute-api.us-east-1.amazonaws.com/v1/flow/total_flow');
      const quantity = Math.round(data.quantity / 16.9);
      setPrevCount(bottleCount);
      setBottleCount(quantity);
    };

    fetchBottleCount();

    const intervalId = setInterval(fetchBottleCount, 60000); // every 1 minute

    // cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, [bottleCount]);

  return (
    <div className="counter-container">
      <h1 className="counter-text">
        <Odometer value={bottleCount} format="(,ddd)" duration={500} />
        plastic bottles
      </h1>
      <h2 className="counter-text">
        <Odometer value={bottleCount * 83} format="(,ddd)" duration={2000} />
        g - CO2
      </h2>
    </div>
  );
};

export default BottleCounter;
