import React from 'react';
import PropTypes from 'prop-types';
// import { Button } from 'reactstrap';
import Productcard from '../components/products/Productcard';
// import { getProductByType } from '../helpers/data/ProductData';

function ProductsView({ products }) {
  // const handleClick = (type) => {
  //   switch (type) {
  //     case 'Truck':
  //       getProductByType(Truck).then((truckArray) => setProducts(truckArray));
  //       break;
  //     case 'Accessory':
  //       getProductByType(Accessory).then((AccesArray) => setProducts(AccesArray));
  //       break;
  //     default:
  //       setProducts();
  //   }
  // };

  return (
    <div>
      <h1>Products</h1>
      <select>
        <option value='Truck'>Truck</option>
        <option value='Accessory'>Accessory</option>
        <option value='true'>For Sale</option>
        <option value='false'>For Rent</option>
      </select>
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
