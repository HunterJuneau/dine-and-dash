import React from 'react';
import Logo from '../assets/DineNDashLogo.png';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Dine and Dash</h1>
      <img id='mainlogo' src={Logo} alt='Dine and Dash Logo'/>
      <h4>Want to rent or even purchase food trucks? Then you have come to the right place!</h4>
    </div>
  );
}

export default LandingPage;
