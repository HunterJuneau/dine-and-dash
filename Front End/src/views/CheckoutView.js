import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'reactstrap';
import { getUsersCart } from '../helpers/data/OrderData';
import { getUserPayments } from '../helpers/data/PaymentData';

function CheckoutView({ dbUser }) {
  const [order, setOrder] = useState({});
  const [userPayment, setUserPayment] = useState([]);

  useEffect(() => {
    getUsersCart(dbUser.id).then(setOrder);
    getUserPayments(dbUser.id).then(setUserPayment);
  }, []);
  console.warn(order, 'hello');
  console.warn(userPayment, 'goodbye');

  return (
    <div>
      <h1 style={{ color: '#fff' }}>THIS IS WHERE YOU CHECKOUT</h1>
      <Card>
      {/* <CardText>{userPayment.map((pay) => (
        <li key={userPayment.id}>
          {pay}
        </li>
      ))}</CardText> */}
      </Card>
      <Button>Checkout</Button>
    </div>
  );
}

CheckoutView.propTypes = {
  dbUser: PropTypes.any,
};

export default CheckoutView;
