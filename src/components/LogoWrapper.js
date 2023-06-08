// components/LogoWrapper.js

import React from 'react';
import HopeLogo from '../images/hope-logo.svg';
import AWLogo from '../images/aw-logo-black.png';

const LogoWrapper = () => {
  return (
    <div className="logo-wrapper">
      <img className="logo" src={HopeLogo} alt="Hope Logo" />
      <p className="x">X</p>
      <img className="logo" src={AWLogo} alt="Advertising Week Logo" />
    </div>
  );
};

export default LogoWrapper;
