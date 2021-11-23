import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  // CardImg,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';
import PaymentForm from './PaymentForm';

function PaymentCard({
  isSubmitted,
  setIsSubmitted,
  setUserPayments,
  ...paymentInfo
}) {
  const [editPayment, setEditPayment] = useState(false);
  // const [payActive, setPayActive] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'edit':
        setEditPayment((prevState) => !prevState);
        break;
      // case 'active':
      //   setPayActive((prevState) => !prevState);
      //   break;
      default:
        console.warn('Hello World!');
    }
  };
  return (
    <div>
      <Card>
        <br />
        <CardTitle tag='h3'> Type: {paymentInfo.type}</CardTitle>
        <CardTitle tag='h5'> Account Number: {paymentInfo.accountNumber}</CardTitle>
        <CardTitle tag='h6'> Payment Id: {paymentInfo.id}</CardTitle>
        <br />
        <Button onClick>Delete Payment Method</Button >
        <br />
        <Button onClick={() => handleClick('edit')}>{ editPayment ? 'Close' : 'Edit Payment Method' }</Button>
        {/* <Button color='primary' onClick={() => handleClick('active')}> { payActive ? 'Close' : 'Disable Payment' }</Button> */}
        <CardBody>
        {
          editPayment && <PaymentForm
            formTitle='Edit Payment'
            {...paymentInfo}
            editPayment={editPayment}
            setEditPayment={setEditPayment}
            setUserPayments={setUserPayments}
            isSubmitted={isSubmitted}
            setIsSubmitted={setIsSubmitted}
          />
        }
        {/* {
          payActive && <PaymentForm
          formTitle='Disable Payment'
          {...paymentInfo}
          payActive={payActive}
          setPayActive={setPayActive}
          // editPayment={editPayment}
          setEditPayment={setEditPayment}
          setUserPayments={setUserPayments}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
        } */}
        </CardBody>
          {/* <br />
          <Button onClick={() => history.push(`/user/${id}`)}>Back To User Profile</Button>
          <br /> */}
          <br />
      </Card>
    </div>
  );
}

PaymentCard.propTypes = {
  isSubmitted: PropTypes.bool,
  setIsSubmitted: PropTypes.func,
  setUserPayments: PropTypes.func,
  paymentInfo: PropTypes.object
};

export default PaymentCard;
