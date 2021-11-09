import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Card,
  // CardImg,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';
import { getUserOrders } from '../helpers/data/UserData';

function UserOrdersView() {
  const [userOrders, setUserOrders] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  const totalNumberOfOrders = userOrders.length;
  const noOrders = <h1>You Have No Orders!</h1>;
  useEffect(() => {
    const isMounted = true;
    if (isMounted) {
      getUserOrders(id).then((response) => setUserOrders(response));
    }
  }, []);

  if (totalNumberOfOrders <= 0) {
    return noOrders;
  }

  return (
    <div>
      <h1>Order History</h1>
      <br />
      <h4>Past Orders: {totalNumberOfOrders}</h4>
      <br />
      {userOrders.filter((orderInfo) => orderInfo.completed).map((orderInfo) => (
        <Card key={orderInfo.id}>
          <br />
        <CardTitle tag='h3'> Total Price: {orderInfo.totalCost}</CardTitle>
          <CardBody>
          </CardBody>
          <Button onClick={() => history.push(`/user/${id}`)}>Back To User Profile</Button>
          <br />
          <Button onClick={() => history.push(`/productOrder/order/${orderInfo.id}`)}>Order Details</Button >
          <br />
          <br />
      </Card>
      ))}
    </div>
  );
}

export default UserOrdersView;
