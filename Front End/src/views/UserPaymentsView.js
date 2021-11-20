import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import PaymentCard from '../components/payments/PaymentCard';
import PaymentForm from '../components/payments/PaymentForm';
import { getUserPayments } from '../helpers/data/PaymentData';

function UserPaymentsView() {
  const [userPayments, setUserPayments] = useState([]);
  const [createPayment, setCreatePayment] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { id } = useParams();
  // const history = useHistory();
  // const amountOfPayments = userPayments.length;
  // const noPayments = <div><h1>You Have No Payment Methods!</h1><Button onClick={() => history.push(`/user/${id}`)}>Add Payment Method</Button>
  // </div>;

  useEffect(() => {
    const isMounted = true;
    if (isMounted) {
      getUserPayments(id).then((response) => setUserPayments(response));
    }
  }, [isSubmitted]);

  const openAddClick = () => {
    setCreatePayment(!createPayment);
  };

  // if (userPayments?.length <= 0) {
  //   return noPayments;
  // }

  return (
    <div>
      <h1>Payment Methods</h1>
      <br />
      <h4>Payment Methods: {userPayments.length}</h4>
      <br />
      <Button onClick={openAddClick}>Add A Payment</Button>
      <>
      {
          createPayment && <PaymentForm
            formTitle='Add a New Payment'
            personId={id}
            setUserPayments={setUserPayments}
            isSubmitted={isSubmitted}
            setIsSubmitted={setIsSubmitted}
            createPayment={createPayment}
            setCreatePayment={setCreatePayment}
          />
        }
      </>
      <br />
      {userPayments.length <= 0 ? 'You Have No Payment Methods!' : userPayments.filter((paymentInfo) => paymentInfo.active).map((paymentInfo) => (
        <PaymentCard
          key={paymentInfo.id}
          {...paymentInfo}
          setUserPayments={setUserPayments}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
      ))}
    </div>
  );
}

export default UserPaymentsView;
