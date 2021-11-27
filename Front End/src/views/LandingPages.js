import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import redLogo from '../assets/DineNDashRedLogo.png';

function LandingPage() {
  const history = useHistory();
  return (
    <div className='landing'>
      <h1 className='landingText'>Welcome to Dine and Dash</h1>
      <img id='mainlogo' src={redLogo} alt='Dine and Dash Logo'/>
      <h4 className='landingText'>Want to rent or even purchase food trucks? Then you have come to the right place!</h4>
      <br /><br />
      <Button id='landingButtonToProducts' onClick={() => history.push('/products')}>See Products</Button>
    </div>
  );
}

export default LandingPage;
