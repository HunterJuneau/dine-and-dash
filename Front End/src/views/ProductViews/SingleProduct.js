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
import { createOrder, getUsersCart, createProductOrder } from '../../helpers/data/OrderData';

function SingleProduct({
  admin = false,
  dbUser,
}) {
  const [singleProduct, setSingleProduct] = useState({});
  const { productId } = useParams();
  const [createCart, setCreateCart] = useState({
    // userId: users.id,
  });
  const [addProductOrder, setAddProductOrder] = useState({
    productId
  });
  const history = useHistory();

  useEffect(() => {
    const isMounted = true;
    if (isMounted) {
      getSingleProduct(productId).then((response) => setSingleProduct(response.data));
    }
  }, []);

  const AddToCartHandleClick = () => {
    getUsersCart(dbUser.id).then((data) => {
      if (!data) {
        createOrder(createCart).then((r) => setCreateCart(r));
        // console.warn(createCart);
        console.warn(setCreateCart);
      } else {
        setCreateCart(data);
        console.warn('You have an active cart, please add products to it');
        // console.warn(createCart);
        // add the item to the cart
        // console.warn(data.id);
        console.warn(data);
        console.warn(addProductOrder);
        createProductOrder({ orderId: data.id, productId }).then((r) => setAddProductOrder(r));
      }
    });
  };
  return (
    <div className='singleProductContainer'>
      <Card className='productCard'>
        <CardTitle tag='h3'>{singleProduct.productName}</CardTitle>
          <CardBody>
            <CardTitle tag='h6'>{singleProduct.type}</CardTitle>
            <CardText>{singleProduct.productDescription}</CardText>
            <CardText>Price: ${singleProduct.price}</CardText>
            <CardText>Quantity: {singleProduct.quantity}</CardText>
            <CardText>{singleProduct.forSale ? 'For Sale' : ''}</CardText>
            <CardText>{singleProduct.forRent ? 'For Rent' : ''} </CardText>
            <img id='productImage'src={singleProduct.image}/>
          </CardBody>
          { admin ? '' : <Button color='success' className='float-right' onClick={AddToCartHandleClick}>Add To Cart</Button>}
          <Button color='info' onClick={() => history.push(admin ? '/admin/inventory' : '/products')}>Back</Button>
      </Card>
    </div>
  );
}

SingleProduct.propTypes = {
  admin: PropTypes.bool,
  fbUser: PropTypes.any,
  products: PropTypes.array,
  users: PropTypes.any,
  dbUser: PropTypes.any
};

export default SingleProduct;
