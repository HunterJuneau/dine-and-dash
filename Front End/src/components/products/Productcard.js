import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  // CardImg,
  CardBody,
  CardTitle,
  // Button
} from 'reactstrap';

function Productcard({ ...productInfo }) {
  return (
    <div>
      <Card>
        <CardTitle tag='h5'>{productInfo.productName}</CardTitle>
          <CardBody>
            {productInfo.type}
            <CardText>{productInfo.productDescription}</CardText>
            <CardText>Price: ${productInfo.price}</CardText>
            <CardText>Quantity: {productInfo.quantity}</CardText>
            <CardText>{(productInfo.forSale === true) ? "For Sale" : "For Rent Only"}</CardText>
          </CardBody>
      </Card>
    </div>
  );
}

Productcard.propTypes = {
  productInfo: PropTypes.object
};

export default Productcard;
