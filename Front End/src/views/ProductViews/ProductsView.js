import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';
import Productcard from '../../components/products/Productcard';
import {
  getProductByType,
  getProductsForSale,
  getProductsForRent,
  getAllProducts
} from '../../helpers/data/ProductData';

function ProductsView({
  products,
  setProducts,
  users,
  fbUser,
  dbUser
}) {
  const seeAllClick = () => {
    getAllProducts().then(setProducts);
  };
  const truckClick = (e) => {
    getProductByType(e.target.value).then((response) => setProducts((response.data)));
  };
  const accessoryClick = (e) => {
    getProductByType(e.target.value).then((response) => setProducts((response.data)));
  };
  const forSaleClick = (e) => {
    getProductsForSale(e.target.value).then((response) => setProducts((response.data)));
  };
  const forRentClick = (e) => {
    getProductsForRent(e.target.value).then((response) => setProducts((response.data)));
  };

  return (
    <div>
      <h1 style={{ color: '#fff' }}>Products</h1>
        <p style={{ color: '#fff' }}>Sort By:</p>
        <Button onClick={seeAllClick}>See All</Button><br />
      <ButtonGroup id='button-group'>
        <Button value='Truck' onClick={truckClick}>Truck</Button>
        <Button value='Accessory' onClick={accessoryClick}>Accessory</Button>
        <Button value='true' onClick={forSaleClick}>For Sale</Button>
        <Button value='true' onClick={forRentClick}>For Rent</Button>
      </ButtonGroup>
      <div className='productsContainer'>
      {products.map((productInfo) => (
        <Productcard
          key={productInfo.id}
          {...productInfo}
          products={products}
          setProducts={setProducts}
          users={users}
          fbUser={fbUser}
          dbUser={dbUser}
        />
      ))}
      </div>
    </div>
  );
}

ProductsView.propTypes = {
  products: PropTypes.array,
  setProducts: PropTypes.func,
  users: PropTypes.any,
  fbUser: PropTypes.any,
  dbUser: PropTypes.any,
};

export default ProductsView;
