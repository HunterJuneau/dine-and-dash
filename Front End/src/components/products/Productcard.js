import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardText,
  // CardImg,
  CardBody,
  CardTitle,
  Button,
  ButtonGroup
} from 'reactstrap';
import ProductForm from './ProductForm';
import { createOrder, getUsersCart } from '../../helpers/data/OrderData';

function Productcard({
  dbUser,
  fbUser,
  admin,
  setProducts,
  products,
  users,
  ...productInfo
}) {
  const [editProduct, setEditProduct] = useState(false);
  const [softDelete, setSoftDelete] = useState(false);
  const [createCart, setCreateCart] = useState({
  });
  // const [getCart, setGetCart] = useState({
  //   userId: users.id
  // });

  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'edit':
        setEditProduct((prevState) => !prevState);
        break;
      case 'deleteSoft':
        setSoftDelete((prevState) => !prevState);
        break;
      default:
    }
  };

  const AddToCartHandleClick = () => {
    getUsersCart(dbUser.id).then((data) => {
      if (!data) {
        createOrder(createCart).then((response) => console.warn(response.data));
      } else {
        console.warn('You have an active cart, please add products to it');
        // add the item to the cart
      }
    });
  };

  // console.warn(users);
  // useEffect(() => {
  //   const isMounted = true;
  //   if (isMounted) {
  //     createOrder(addToCart).then((response) => console.warn(response));
  //   }
  // }, []);

  console.warn(setCreateCart);
  return (
    <div>
      <Card className='productCard'>
        <CardTitle tag='h3'>{productInfo.productName}</CardTitle>
          <CardBody>
            <CardTitle tag='h6'>{productInfo.type}</CardTitle>
            <CardText>{productInfo.productDescription}</CardText>
            <CardText>{productInfo.forSale ? 'For Sale' : ''}</CardText>
            <CardText>{productInfo.forRent ? 'For Rent' : ''} </CardText>
            { admin ? <CardText>{productInfo.status ? 'Available' : 'Out of Stock'}</CardText> : '' }
            <Button color='primary' className='float-left' onClick={() => history.push(admin ? `/admin/inventory/${productInfo.id}` : `/products/${productInfo.id}`)}>See Details</Button>
            { admin ? '' : <Button color='success' className='float-right' onClick={AddToCartHandleClick}>Add To Cart</Button>}
          </CardBody>
          <ButtonGroup>
            { admin ? <Button color='info' onClick={() => handleClick('edit')}> { editProduct ? 'Close' : 'Edit' }</Button> : '' }
            { admin ? <Button color='primary' onClick={() => handleClick('deleteSoft')}> { softDelete && admin ? 'Close' : 'Change Availability' }</Button> : '' }
          </ButtonGroup>
        {
          editProduct && <ProductForm
            formTitle='Edit Product'
            {...productInfo}
            products={products}
            setProducts={setProducts}
            editProduct={editProduct}
            />
        }
        {
          softDelete && <ProductForm
            formTitle='Change Availability'
            {...productInfo}
            admin={admin}
            products={setProducts}
            setProducts={setProducts}
            softDelete={softDelete}
          />
        }
      </Card>
    </div>
  );
}

Productcard.propTypes = {
  fbUser: PropTypes.any,
  admin: PropTypes.bool,
  productInfo: PropTypes.object,
  setProducts: PropTypes.func,
  products: PropTypes.array,
  users: PropTypes.any,
  dbUser: PropTypes.any

};

export default Productcard;
