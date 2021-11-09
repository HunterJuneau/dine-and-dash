import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Input,
} from 'reactstrap';
import Productcard from '../components/products/Productcard';
// import { getProductByType } from '../helpers/data/ProductData';

function ProductsView({ products, setProducts }) {
  const handleInputChange = (e) => {
    setProducts((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts({ value: e.target.value });
  };

  return (
    <div>
      <h1>Products</h1>
      <Form
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <Input
          name='products'
          type='select'
          defaultValue={products}
          onChange={handleInputChange}
        >
          <select>
            <option hidden value=''>Find Products By:</option>
            <option value='Truck'>Truck</option>
            <option value='Accessory'>Accessory</option>
            <option value='true'>For Sale</option>
            <option value='false'>For Rent</option>
          </select>
        </Input>
        <Button type='submit'>Find Products</Button>
      </Form>
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
