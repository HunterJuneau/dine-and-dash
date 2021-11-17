import React from 'react';
import PropTypes from 'prop-types';
import ProductForm from '../../components/products/ProductForm';

function ProductFormView({ setProducts }) {
  return (
    <div>
      <ProductForm
        formTitle='Create New Product'
        setProducts={setProducts}
      />
    </div>
  );
}

ProductFormView.propTypes = {
  setProducts: PropTypes.func
};

export default ProductFormView;
