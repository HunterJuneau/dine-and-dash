import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Card,
  CardText,
  // CardImg,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';
import getUserOrderDetails from '../../helpers/data/ProductOrderData';

function UserSingleOrderDetailsView() {
  const [productOrders, setProductOrders] = useState([]);
  const { orderId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const isMounted = true;
    if (isMounted) {
      getUserOrderDetails(orderId).then((response) => setProductOrders(response));
    }
  }, []);

  return (
    <div>
      <Button onClick={() => history.goBack()}>Back To Orders</Button>
      { productOrders.map((productOrderInfo) => (
        <Card key={productOrderInfo.productOrderId}>
          <br />
        <CardTitle tag='h3'>{productOrderInfo.productName}</CardTitle>
          <CardBody>
            <div>
            <CardText> Propduct Description: {productOrderInfo.productDescription}</CardText>
            <br />
            </div>
            <div>
            <img id='productImage' src={productOrderInfo.image} />
            </div>
            <br />
            <CardText>Product Type: {productOrderInfo.productType}</CardText>
            <CardText>Product Quantity: {productOrderInfo.productQuantity}</CardText>
            <CardText>Individual Product Price: {productOrderInfo.individualProductPrice}</CardText>
            <CardText>Total Cost of Product: {productOrderInfo.totalCost}</CardText>
            <CardText>Payment Type: {productOrderInfo.paymentType}</CardText>
            <CardText>Account Number: {productOrderInfo.accountNumber}</CardText>
            <br />
          </CardBody>
      </Card>))}
    </div>
  );
}

export default UserSingleOrderDetailsView;
