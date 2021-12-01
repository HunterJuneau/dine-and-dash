import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUsersCart } from '../helpers/data/OrderData';

function CheckoutView({ dbUser }) {
  const [order, setOrder] = useState({});

  useEffect(() => {
    getUsersCart(dbUser.id).then(setOrder);
  }, []);
  console.warn(order);

  return (
    <div>
      <h1 style={{ color: '#fff' }}>THIS IS WHERE YOU CHECKOUT</h1>
    </div>
  );
}

CheckoutView.propTypes = {
  dbUser: PropTypes.any
};

export default CheckoutView;
