import React from 'react';
import PropTypes from 'prop-types';
import Productcard from '../components/products/Productcard';

function InventoryView({ products }) {
  return (
    <div>
      {products.map((productInfo) => (
        <Productcard key={productInfo.id} {...productInfo} />
      ))}
    </div>
  );
}

InventoryView.propTypes = {
  products: PropTypes.array,
};

export default InventoryView;
