import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';
import { addProduct } from '../../helpers/data/ProductData';

function ProductForm({ formTitle, setProducts }) {
  const [createProduct, setCreateProduct] = useState({
  });

  const handleInputChange = (e) => {
    setCreateProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(createProduct.forSale);
  };

  const handleSubmit = (e) => {
    console.warn(createProduct);
    e.preventDefault();
    addProduct(createProduct).then((response) => setProducts(response));
  };
  return (
    <div>
      <h1>{formTitle}</h1>
      <Form
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <Label>Product Name</Label>
        <Input
          name='productName'
          type='text'
          value={createProduct.productName}
          onChange={handleInputChange}
        />
        <Label>Product Description</Label>
        <Input
          name='productDescription'
          type='text'
          value={createProduct.productDescription}
          onChange={handleInputChange}
        />
        <Label>Type of Product</Label>
        <Input
          name='type'
          type='select'
          value={createProduct.type}
          onChange={handleInputChange}
        >
            <option></option>
            <option value='Truck'>Truck</option>
            <option value='Accessory'>Accessory</option>
        </Input>
        <Label>Price</Label>
        <Input
          name='price'
          type='text'
          value={createProduct.price}
          onChange={handleInputChange}
        />
        <Label>Quantity</Label>
        <Input
          name='quantity'
          type='text'
          value={createProduct.quantity}
          onChange={handleInputChange}
        />
        <Label>Image</Label>
        <Input
          name='Image'
          type='text'
          value={createProduct.Image}
          onChange={handleInputChange}
        />
        <Input
          name='forSale'
          type='checkbox'
          value={true}
          checked={createProduct.forSale}
          onChange={handleInputChange}
        />
          <Label check>For Sale or Rent</Label>
          <br/>
          <Input
          name='forSale'
          type='checkbox'
          value={false}
          checked={createProduct.forSale}
          onChange={handleInputChange}
        />
          <Label check>For Rent Only</Label>
        <br />
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

ProductForm.propTypes = {
  formTitle: PropTypes.string,
  setProducts: PropTypes.func
};

export default ProductForm;
