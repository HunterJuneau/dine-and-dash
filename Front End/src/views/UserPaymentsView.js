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
<<<<<<< HEAD
<<<<<<< HEAD
  const history = useHistory();
  const amountOfPayments = userPayments.length;
  const noPayments = <div><h1>You Have No Payment Methods!</h1><Button onClick={() => history.goBack()}>Back</Button>
  </div>;
=======
  // const history = useHistory();
  // const amountOfPayments = userPayments.length;
  // const noPayments = <div><h1>You Have No Payment Methods!</h1><Button onClick={() => history.push(`/user/${id}`)}>Add Payment Method</Button>
  // </div>;
>>>>>>> 3809d51db40154e4e4d47e3f27a2eb1aa61e2e0e
=======
>>>>>>> 85d3718f213f4ced103e1e5c57eff4856e0697e0

  useEffect(() => {
    const isMounted = true;
    if (isMounted) {
      getUserPayments(id).then((response) => setUserPayments(response));
    }
  }, [isSubmitted]);

  const openAddClick = () => {
    setCreatePayment(!createPayment);
  };

  return (
    <div>
      <h1>Payment Methods</h1>
      <br />
      <h4>Payment Methods: {userPayments.length}</h4>
      <br />
<<<<<<< HEAD
<<<<<<< HEAD
      {userPayments.filter((paymentInfo) => paymentInfo.active).map((paymentInfo) => (
        <Card key={paymentInfo.id}>
          <br />
        <CardTitle tag='h3'> Type: {paymentInfo.type}</CardTitle>
        <CardTitle tag='h5'> Account Number: {paymentInfo.accountNumber}</CardTitle>
        <CardTitle tag='h6'> Payment Id: {paymentInfo.id}</CardTitle>
          <CardBody>
          </CardBody>
          <Button onClick>Delete Payment Method</Button >
          <br />
          <Button onClick>Edit Payment Method</Button >

          {/* <br />
          <Button onClick={() => history.goBack()}>Back</Button>
          <br /> */}
          <br />
      </Card>
=======
=======
>>>>>>> 85d3718f213f4ced103e1e5c57eff4856e0697e0
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
      {userPayments.length <= 0 ? 'You Have No Payment Methods!' : userPayments.map((paymentInfo) => (
        <PaymentCard
          key={paymentInfo.id}
          {...paymentInfo}
          personId={id}
          setUserPayments={setUserPayments}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
<<<<<<< HEAD
>>>>>>> 3809d51db40154e4e4d47e3f27a2eb1aa61e2e0e
=======
      </Card>
>>>>>>> 85d3718f213f4ced103e1e5c57eff4856e0697e0
      ))}
    </div>
  );
}

export default UserPaymentsView;
