import React, { useState } from 'react';
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
import ProductForm from './ProductForm';

function Productcard({ admin, ...productInfo }) {
  const [editProduct, setEditProduct] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'edit':
        setEditProduct((prevState) => !prevState);
        break;
      default:
        console.warn('Hello World!');
    }
  };

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
          <Button onClick={() => handleClick('edit')}> { editProduct ? 'Close' : 'Edit' }</Button>
        {
          editProduct && <ProductForm
            formTitle='Edit Product'
            {...productInfo}
            />
        }
      </Card>
    </div>
  );
}

Productcard.propTypes = {
  admin: PropTypes.bool,
  productInfo: PropTypes.object
};

export default Productcard;
