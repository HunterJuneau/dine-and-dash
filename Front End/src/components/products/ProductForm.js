import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';
import { addProduct, updateProduct } from '../../helpers/data/ProductData';

function ProductForm({ formTitle, setProducts, ...productInfo }) {
  const [createProduct, setCreateProduct] = useState({
    productName: productInfo?.productName || '',
    productDescription: productInfo?.productDescription || '',
    type: productInfo?.type || '',
    price: productInfo?.price || '',
    quantity: productInfo?.quantity || '',
    Image: productInfo?.Image || '',
    forSale: productInfo?.forSale || false,
    status: productInfo?.status || false,
    // id: productInfo?.id || ''
  });

  const handleInputChange = (e) => {
    setCreateProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (createProduct.id) {
      updateProduct(createProduct).then((response) => setProducts(response));
    } else {
      addProduct(createProduct).then((response) => setProducts(response));
    }
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
          value={createProduct.forSale}
          checked={true}
          onChange={handleInputChange}
        />
          <Label check>For Sale or Rent</Label>
          <br/>
          <Input
          name='status'
          type='checkbox'
          value={createProduct.status}
          checked={true}
          onChange={handleInputChange}
        />
          <Label check>Click if Available</Label>
        <br />
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

ProductForm.propTypes = {
  formTitle: PropTypes.string,
  setProducts: PropTypes.func,
  productInfo: PropTypes.object
};

export default ProductForm;
