import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  CardBody
} from 'reactstrap';
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
      <h1 style={{ color: '#fff' }}>CHECKOUT</h1>
      <Card>
        <CardTitle>Your Order Id: {order.id}</CardTitle>
        <CardTitle>Total Cost: {order.totalCost}</CardTitle>
          <CardBody>
            <CardText>Payment Methods You Can Use:</CardText>
            {userPayment.map((pay) => (
            <CardText key={userPayment.id}>
            {pay.type} <br />
            {pay.accountNumber}
            </CardText>))}
          </CardBody>
      </Card>
      <Button>Checkout</Button>
    </div>
  );
}

CheckoutView.propTypes = {
  dbUser: PropTypes.any,
};

export default CheckoutView;
