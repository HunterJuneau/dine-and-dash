import React from 'react';
import PropTypes from 'prop-types';
import Productcard from '../components/products/Productcard';

function InventoryView({ products, setProducts }) {
  return (
    <div className='productsContainer'>
      {products.map((productInfo) => (
        <Productcard key={productInfo.id}
        admin={true}
        products={products}
        setProducts={setProducts}
        {...productInfo} />
      ))}
    </div>
  );
}

InventoryView.propTypes = {
  products: PropTypes.array,
  setProducts: PropTypes.func
};

export default InventoryView;
