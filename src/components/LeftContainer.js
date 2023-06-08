// components/LeftContainer.js

import React from 'react';
import OdometerWrapper from './OdometerWrapper';
import Bottle from '../images/bottle.svg';
import '../styles/LeftContainer.css';


const LeftContainer = ({ bottles, emissions }) => {
  return (
    <div className="left-container">
      <img className="bottle" src={Bottle} alt="Bottle" />
      <div className="header">
        <span>At AW22, we have saved:</span>
      </div>
      <OdometerWrapper value={bottles} label="plastic bottles" />
      <OdometerWrapper value={emissions} label="g - CO₂" format='(,ddd)' />
    </div>
  );
};

export default LeftContainer;