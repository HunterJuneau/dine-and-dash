import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  // CardText,
  // CardImg,
  // CardBody,
  CardTitle,
  // Button
} from 'reactstrap';

function Productcard({ ...productInfo }) {
  return (
    <div>
      <Card>
        <CardTitle tag='h5'>{productInfo.productName}</CardTitle>
      </Card>
    </div>
  );
}

Productcard.propTypes = {
  productInfo: PropTypes.object
};

export default Productcard;
