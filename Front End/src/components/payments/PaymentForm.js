import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';
import { addPayment, getUpdatedPayment } from '../../helpers/data/PaymentData';

function PaymentForm({
  userPayments,
  formTitle,
  setUserPayments,
  editPayment,
  setEditPayment,
  isSubmitted,
  setIsSubmitted,
  personId,
  createPayment,
  setCreatePayment,
  ...paymentInfo
}) {
  const [addNewPayment, setAddNewPayment] = useState({
    type: paymentInfo?.type || '',
    accountNumber: paymentInfo?.accountNumber || '',
    userId: paymentInfo?.userId || personId,
    status: paymentInfo?.status || true,
    id: paymentInfo?.id
  });

  const handleInputChange = (e) => {
    setAddNewPayment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isMounted = true;
    if (isMounted) {
      if (paymentInfo.id) {
        getUpdatedPayment(addNewPayment.id, addNewPayment, addNewPayment.userId).then(setUserPayments);
        setEditPayment(!editPayment);
      } else {
        addPayment(personId, addNewPayment).then(setUserPayments);
        setCreatePayment(!createPayment);
      }
      setIsSubmitted(!isSubmitted);
    }
  };

  return (
    <div>
      <h4>{formTitle}</h4>
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
          />
          <React.Fragment>
        <Input
          name='status'
          type='checkbox'
          checked={addNewPayment.status}
          onChange={handleInputChange}
        />
        <Label check>Click if you want to disable this payment</Label>
        </React.Fragment>
        <br />
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

PaymentForm.propTypes = {
  userPayments: PropTypes.array,
  formTitle: PropTypes.string,
  setUserPayments: PropTypes.func,
  editPayment: PropTypes.bool,
  setEditPayment: PropTypes.func,
  paymentInfo: PropTypes.object,
  isSubmitted: PropTypes.bool,
  setIsSubmitted: PropTypes.func,
  personId: PropTypes.string,
  createPayment: PropTypes.bool,
  setCreatePayment: PropTypes.func
};

export default PaymentForm;
