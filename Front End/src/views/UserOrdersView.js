import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  Card,
  CardText,
  // CardImg,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { getUserOrders } from '../helpers/data/UserData';

function UserOrdersView() {
  const [userOrders, setUserOrders] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const isMounted = true;
    if (isMounted) {
      getUserOrders(id).then((response) => setUserOrders(response));
    }
  }, []);

  console.warn(userOrders);
  return (
    <div>
      <h1>werk bitch ass</h1>
      {userOrders.map((orderInfo) => (
        <Card key={orderInfo.id}>
        <CardTitle tag='h3'> Total: {orderInfo.totalCost}</CardTitle>
          <CardBody>
          <CardText>{orderInfo.completed ? 'Completed' : ''}</CardText>
          </CardBody>
          {/* <Button onClick={() => history.push('/user')}>Back</Button> */}
      </Card>
      ))}
    </div>
  );
}
export default UserOrdersView;
