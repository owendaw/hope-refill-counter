// components/RightContainer.js

import React from 'react';
import LogoWrapper from './LogoWrapper';
import PoweredByWrapper from './PoweredByWrapper';
import '../styles/RightContainer.css';


const RightContainer = () => {
  return (
    <div className="right-container">
      <LogoWrapper />
      <PoweredByWrapper />
    </div>
  );
};

export default RightContainer;
