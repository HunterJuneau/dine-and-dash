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
  payActive,
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
      [e.target.name]: e.target.value,
    }));
    console.warn(addNewPayment.status, 'hello');
    console.warn(addNewPayment, 'hello');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const isMounted = true;
    // if (isMounted) {
    if (paymentInfo.id) {
      getUpdatedPayment(addNewPayment.id, addNewPayment, addNewPayment.userId).then(setUserPayments);
      // setEditPayment(false);
      console.warn(addNewPayment.status, 'submit');
      console.warn(addNewPayment, 'submit');
    } else {
      addPayment(personId, addNewPayment).then(setUserPayments);
      setCreatePayment(!createPayment);
      // }
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
 <React.Fragment>
        <Label>Payment Type</Label>
          <Input
            name='type'
            type='string'
            value={addNewPayment.type}
            onChange={handleInputChange}
          />
          </React.Fragment>
 <React.Fragment>
        <Label>Account Number</Label>
          <Input
            name='accountNumber'
            type='string'
            value={addNewPayment.accountNumber}
            onChange={handleInputChange}
          />
        </React.Fragment>

 <React.Fragment>
        <Label>User Id</Label>
          <Input
            name='userId'
            type='string'
            value={addNewPayment.userId}
            readOnly
          />
          </React.Fragment>
        <select
          type='select'
          value={addNewPayment.status}
          onChange={handleInputChange}
        >
         <option hidden value=''>Payment Activity</option>
            <option value='true'>Active</option>
            <option value='false'>Disable Payment</option>
        </select>
        <br />
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
  payActive: PropTypes.bool,
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
