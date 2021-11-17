import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';
import { addPayment } from '../../helpers/data/PaymentData';

function PaymentForm({ userPayments, setUserPayments, ...paymentInfo }) {
  const [addNewPayment, setAddNewPayment] = useState({
    type: paymentInfo?.type || '',
    accountNumber: paymentInfo?.accountNumber || '',
    userId: paymentInfo?.userId
  });
  // console.warn(setUserPayments);
  const handleInputChange = (e) => {
    setAddNewPayment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    const isMounted = true;
    e.preventDefault();
    if (isMounted) {
      addPayment(paymentInfo.id, addNewPayment).then(setUserPayments);
    }
    // console.warn(addNewPayment);
  };

  return (
    <div>
      <Form
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <Label>Payment Type</Label>
          <Input
            name='type'
            type='string'
            value={addNewPayment.type}
            onChange={handleInputChange}
          />
        <Label>Account Number</Label>
          <Input
            name='accountNumber'
            type='string'
            value={addNewPayment.accountNumber}
            onChange={handleInputChange}
          />
        <Label>User Id</Label>
          <Input
            name='userId'
            type='string'
            value={addNewPayment.userId}
            readOnly
            // onChange={handleInputChange}
          />
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

PaymentForm.propTypes = {
  userPayments: PropTypes.array,
  setUserPayments: PropTypes.func,
  paymentInfo: PropTypes.object
};

export default PaymentForm;
