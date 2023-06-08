// components/OdometerWrapper.js

import React from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-minimal.css';

const OdometerWrapper = ({ value, label, format }) => {
  return (
    <div className="odometer-wrapper">
      <Odometer value={value} animation='count' duration={10000} format={format || ''} />
      <span className="odometer-label">{label}</span>
    </div>
  );
};

export default OdometerWrapper;
