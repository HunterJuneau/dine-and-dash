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
import { getSingleProduct } from '../helpers/data/ProductData';

function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState({});
  const { productId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const isMounted = true;
    if (isMounted) {
      getSingleProduct(productId).then((response) => setSingleProduct(response.data));
    }
  }, []);

  return (
    <div>
      <Card>
        <CardTitle tag='h3'>{singleProduct.productName}</CardTitle>
          <CardBody>
            <CardTitle tag='h6'>{singleProduct.type}</CardTitle>
            <CardText>{singleProduct.productDescription}</CardText>
            <CardText>Price: ${singleProduct.price}</CardText>
            <CardText>Quantity: {singleProduct.quantity}</CardText>
            <CardText>{singleProduct.forSale ? 'For Sale or Rent' : 'For Rent Only'}</CardText>
          </CardBody>
          <Button onClick={() => history.push('/products')}>Back</Button>
      </Card>
    </div>
  );
}

export default SingleProduct;
