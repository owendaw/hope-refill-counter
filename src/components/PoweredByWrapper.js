// components/PoweredByWrapper.js

import React from 'react';
import DuckDuckGoLogo from '../images/duckduckgo.svg';

const PoweredByWrapper = () => {
  return (
    <div className="powered-by-wrapper">
      <p className="powered-by">Powered by:</p>
      <img className="logo" src={DuckDuckGoLogo} alt="Duck Duck Go Logo" />
      <p className="tagline">Tap into customers who don't use Google search.</p>
    </div>
  );
};

export default PoweredByWrapper;
