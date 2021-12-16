import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Card,
  // CardImg,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';
import { getUserPayments } from '../../helpers/data/PaymentData';
import { getUserOrders } from '../../helpers/data/UserData';

function UserOrdersView() {
  const [userOrders, setUserOrders] = useState([]);
  const [userPayments, setUserPayments] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  // const orderNotcompleted = userOrders.completed;
  const totalNumberOfOrders = userOrders.length;
  const noUserOrdersMessage = <div><h1>You Have No Orders!</h1><Button onClick={() => history.goBack()}>Back</Button>
  </div>;

  useEffect(() => {
    const isMounted = true;
    if (isMounted) {
      getUserOrders(id).then((response) => setUserOrders(response));
      getUserPayments(id).then((response) => setUserPayments(response));
    }
  }, []);
  console.warn(userPayments);
  if (totalNumberOfOrders <= 0) {
    return noUserOrdersMessage;
  }

  // if (totalNumberOfOrders.completed === false) {
  //   return orderNotcompleted;
  // }

  return (
    <div>
      <h1 style={{ color: '#fff' }}>Order History</h1>
      <br />
      <h4 style={{ color: '#fff' }}>Past Orders: {totalNumberOfOrders}</h4>
      <br />
      {userOrders.map((orderInfo) => (
        <Card key={orderInfo.id}>
          <br />
        <CardTitle tag='h3'> Total Price: {orderInfo.totalCost}</CardTitle>
          <CardBody>
            {orderInfo.completed ? 'Completed Order' : 'Pending Order'}
          </CardBody>
          <Button onClick={() => history.push(`/productOrder/order/${orderInfo.id}`)}>Order Details</Button >
          <br />
          {orderInfo.completed ? '' : <Button onClick={() => history.push('/checkout')}>Checkout</Button>}
          <br />
          <Button onClick={() => history.goBack()}>Back</Button>
          <br />
          <br />
      </Card>
      ))}
    </div>
  );
}

export default UserOrdersView;
