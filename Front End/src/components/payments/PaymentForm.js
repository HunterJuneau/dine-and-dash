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
    active: paymentInfo?.active,
    id: paymentInfo?.id
  });

  const handleInputChange = (e) => {
    setAddNewPayment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleActive = () => {
    setAddNewPayment((prevState) => ({ ...prevState, active: !prevState.active }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isMounted = true;
    if (isMounted) {
      if (paymentInfo.id) {
        getUpdatedPayment(addNewPayment.id, addNewPayment, addNewPayment.userId).then(setUserPayments);
        setEditPayment(false);
      } else {
        addPayment(personId, addNewPayment).then(setUserPayments);
        setCreatePayment(!createPayment);
      }
      setIsSubmitted(!isSubmitted);
    }
  };

  return (
    <div>
      <h4 style={{ color: '#fff' }}>{formTitle}</h4>
      <h5 style={{ color: '#fff' }}>Press Submit for Changes to be Recorded</h5>
      <Form
        className='paymentForm'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <Label>Payment Type</Label>
          <Input
            name='type'
            type='string'
            value={addNewPayment.type}
            onChange={handleInputChange}
            disabled={paymentInfo.active === false}
          />
        <Label>Account Number</Label>
          <Input
            name='accountNumber'
            type='string'
            value={addNewPayment.accountNumber}
            onChange={handleInputChange}
            disabled={paymentInfo.active === false}
          />
        <Label>User Id</Label>
          <Input
            name='userId'
            type='string'
            value={addNewPayment.userId}
            readOnly
          />
        { createPayment
          ? '' : <React.Fragment>
           <Button
            color='danger'
            name='active'
            onClick={toggleActive}>{addNewPayment.active ? 'Disable Payment' : 'Activate Payment'}
          </Button>
          </React.Fragment>
        }
        <br />
        <Button color='secondary' type='submit'>Submit</Button>
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
