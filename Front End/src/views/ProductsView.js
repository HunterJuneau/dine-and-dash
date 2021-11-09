import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Productcard from '../components/products/Productcard';
import { getProductByType, getProductByForSaleOrRent } from '../helpers/data/ProductData';

function ProductsView({ products, setProducts }) {
  const [selectValue, setSelectValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectValue === 'Truck') {
      getProductByType(selectValue).then((response) => setProducts((response.data)));
    } else if (selectValue === 'Accessory') {
      getProductByType(selectValue).then((response) => setProducts((response.data)));
    } else if (selectValue === 'true') {
      getProductByForSaleOrRent(selectValue).then((response) => setProducts((response.data)));
    } else if (selectValue === 'false') {
      getProductByForSaleOrRent(selectValue).then((response) => setProducts((response.data)));
    }
  };
  return (
    <div>
      <h1>Products</h1>
        <form
          onSubmit={handleSubmit}
        >
          <select
            type='text'
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option hidden value=''>Find Products By:</option>
            <option value='Truck'>Truck</option>
            <option value='Accessory'>Accessory</option>
            <option value='true'>For Sale or Rent</option>
            <option value='false'>For Rent Only</option>
          </select>
          <button type='submit'>Find Products</button>
        </form>
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
  products: PropTypes.array,
  setProducts: PropTypes.func
};

export default ProductsView;
