import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardText,
  // CardImg,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';

function Productcard({ admin, ...productInfo }) {
  const history = useHistory();

  return (
    <div>
      <Card>
        <CardTitle tag='h3'>{productInfo.productName}</CardTitle>
          <CardBody>
            <CardTitle tag='h6'>{productInfo.type}</CardTitle>
            <CardText>{productInfo.productDescription}</CardText>
            <CardText>Price: {productInfo.price}</CardText>
            <CardText>Quantity: {productInfo.quantity}</CardText>
            <CardText>{productInfo.forSale ? 'For Sale or Rent' : 'For Rent Only'}</CardText>
          </CardBody>
          <Button onClick={() => history.push(admin ? `/admin/inventory/${productInfo.id}` : `/products/${productInfo.id}`)}>See Details</Button>
      </Card>
    </div>
  );
}

Productcard.propTypes = {
  admin: PropTypes.bool,
  productInfo: PropTypes.object
};

export default Productcard;
