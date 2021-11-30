import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Productcard from '../../components/products/Productcard';
import { getProductByType, getProductByForSaleOrRent } from '../../helpers/data/ProductData';

function ProductsView({
  products,
  setProducts,
  users,
  fbUser,
  dbUser
}) {
  const [selectValue, setSelectValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectValue === 'Truck' || selectValue === 'Accessory') {
      getProductByType(selectValue).then((response) => setProducts((response.data)));
    } else if (selectValue === 'true' || selectValue === 'false') {
      getProductByForSaleOrRent(selectValue).then((response) => setProducts((response.data)));
    }
  };

  return (
    <div>
      <h1 style={{ color: '#fff' }}>Products</h1>
        <form
          onSubmit={handleSubmit}
        >
          <select
            type='select'
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
