import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getUserPayments from '../helpers/data/PaymentData';
// import {
//   Card,
//   // CardImg,
//   CardBody,
//   CardTitle,
//   Button
// } from 'reactstrap';
// import { getUserOrders } from '../helpers/data/UserData';

function UserPaymentsView() {
  const [userPayments, setUserPayments] = useState([]);
  const { id } = useParams();
  // const history = useHistory();

  useEffect(() => {
    const isMounted = true;
    if (isMounted) {
      getUserPayments(id).then((response) => setUserPayments(response));
    }
  }, []);

  console.warn(userPayments);
  return (
    <div>
      <h1>Hello!</h1>
      <h2>Please Work!</h2>
      {/* <h1>Order History</h1>
      <br />
      <h4>Past Orders: {totalNumberOfOrders}</h4>
      <br />
      {userOrders.filter((orderInfo) => orderInfo.completed).map((orderInfo) => (
        <Card key={orderInfo.id}>
          <br />
        <CardTitle tag='h3'> Total Price: {orderInfo.totalCost}</CardTitle>
          <CardBody>
          </CardBody>
          <Button onClick={() => history.push(`/productOrder/order/${orderInfo.id}`)}>Order Details</Button >
          <br />
          <Button onClick={() => history.push(`/user/${id}`)}>Back To User Profile</Button>
          <br />
          <br />
      </Card>
      ))} */}
    </div>
  );
}

export default UserPaymentsView;
