import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  // CardImg,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';
import { getSingleProduct } from '../../helpers/data/ProductData';

function SingleProduct({ admin = false }) {
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
      <Card className='productCard'>
        <CardTitle tag='h3'>{singleProduct.productName}</CardTitle>
          <CardBody>
            <CardTitle tag='h6'>{singleProduct.type}</CardTitle>
            <CardText>{singleProduct.productDescription}</CardText>
            <CardText>Price: ${singleProduct.price}</CardText>
            <CardText>Quantity: {singleProduct.quantity}</CardText>
            <CardText>{singleProduct.forSale ? 'For Sale' : ''}</CardText>
            <CardText>{singleProduct.forRent ? 'For Rent' : ''} </CardText>
            <img id='productImage'src={singleProduct.Image}/>
          </CardBody>
          <Button color='info' onClick={() => history.push(admin ? '/admin/inventory' : '/products')}>Back</Button>
      </Card>
    </div>
  );
}

SingleProduct.propTypes = {
  admin: PropTypes.bool
};

export default SingleProduct;
