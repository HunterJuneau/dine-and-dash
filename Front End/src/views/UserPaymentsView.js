import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Card,
  // CardImg,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';
import PaymentForm from '../components/payments/PaymentForm';
import { getUserPayments } from '../helpers/data/PaymentData';

function UserPaymentsView() {
  const [userPayments, setUserPayments] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  const amountOfPayments = userPayments.length;
  const noPayments = <div><h1>You Have No Payment Methods!</h1><Button onClick={() => history.push(`/user/${id}`)}>Add Payment Method</Button>
  </div>;

  useEffect(() => {
    const isMounted = true;
    if (isMounted) {
      getUserPayments(id).then((response) => setUserPayments(response));
    }
  }, []);

  if (amountOfPayments <= 0) {
    return noPayments;
  }

  return (
    <div>
      <h1>Payment Methods</h1>
      <br />
      <h4>Payment Methods: {amountOfPayments}</h4>
      <br />
      {userPayments.filter((paymentInfo) => paymentInfo.active).map((paymentInfo) => (
        <Card key={paymentInfo.id}>
          <br />
        <CardTitle tag='h3'> Type: {paymentInfo.type}</CardTitle>
        <CardTitle tag='h5'> Account Number: {paymentInfo.accountNumber}</CardTitle>
        <CardTitle tag='h6'> Payment Id: {paymentInfo.id}</CardTitle>
          <CardBody>
          <Button>Add A Payment</Button>
        <PaymentForm
          userPayments={userPayments}
          setUserPayments={setUserPayments}
          {...paymentInfo}
        />
          </CardBody>
          <Button onClick>Delete Payment Method</Button >
          <br />
          <Button onClick>Edit Payment Method</Button >

          {/* <br />
          <Button onClick={() => history.push(`/user/${id}`)}>Back To User Profile</Button>
          <br /> */}
          <br />
      </Card>
      ))}
    </div>
  );
}

export default UserPaymentsView;
