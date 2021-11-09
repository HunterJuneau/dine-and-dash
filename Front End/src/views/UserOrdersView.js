import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Card,
  CardText,
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

  useEffect(() => {
    const isMounted = true;
    if (isMounted) {
      getUserOrders(id).then((response) => setUserOrders(response));
    }
  }, []);

  return (
    <div>
      <h1>Your Orders</h1>
      <br />
      {userOrders.filter((orderInfo) => orderInfo.completed).map((orderInfo) => (
        <Card key={orderInfo.id}>
          <br />
        <CardTitle tag='h3'> Total: {orderInfo.totalCost}</CardTitle>
          <CardBody>
          <CardText>{orderInfo.completed ? 'Completed' : ''}</CardText>
          </CardBody>
          <Button onClick={() => history.push(`/user/${id}`)}>Back</Button>
          <Button onClick={() => history.push(`/productOrder/order/${orderInfo.id}`)}>Order Details</Button>
      </Card>
      ))}
    </div>
  );
}

export default UserOrdersView;
