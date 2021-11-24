import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
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
  personId,
  ...paymentInfo
}) {
  const [editPayment, setEditPayment] = useState(false);
  const history = useHistory();

  const editClick = () => {
    setEditPayment((prevState) => !prevState);
  };

  return (
    <div>
      <Card>
        <br />
        <CardTitle tag='h3'> Type: {paymentInfo.type}</CardTitle>
        <CardTitle tag='h5'> Account Number: {paymentInfo.accountNumber}</CardTitle>
        <CardTitle tag='h6'> Payment Id: {paymentInfo.id}</CardTitle>
        <br />
        {/* <Button onClick>Delete Payment Method</Button > */}
        <br />
        <Button onClick={editClick}>{ editPayment ? 'Close' : 'Edit Payment Method' }</Button>
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
        </CardBody>
          <br />
          <Button onClick={() => history.goBack()}>Back To User Profile</Button>
          <br />
          <br />
      </Card>
    </div>
  );
}

PaymentCard.propTypes = {
  isSubmitted: PropTypes.bool,
  setIsSubmitted: PropTypes.func,
  setUserPayments: PropTypes.func,
  paymentInfo: PropTypes.object,
  personId: PropTypes.string,
};

export default PaymentCard;
