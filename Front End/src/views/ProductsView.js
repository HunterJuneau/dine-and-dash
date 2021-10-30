import React from 'react';
import PropTypes from 'prop-types';
import Productcard from '../components/products/Productcard';

function ProductsView({ products }) {
  return (
    <div>
      {products.map((productInfo) => (
        <Productcard
          key={productInfo.id}
          {...productInfo}
        />
      ))}
    </div>
  );
}

ProductsView.propTypes = {
  products: PropTypes.array
};

export default ProductsView;
