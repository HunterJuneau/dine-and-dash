import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';
import { addProduct, updateProduct } from '../../helpers/data/ProductData';

function ProductForm({
  formTitle,
  setProducts,
  editProduct,
  softDelete,
  admin,
  ...productInfo
}) {
  const [createProduct, setCreateProduct] = useState({
    productName: productInfo?.productName || '',
    productDescription: productInfo?.productDescription || '',
    type: productInfo?.type || '',
    price: productInfo?.price || '',
    quantity: productInfo?.quantity || '',
    Image: productInfo?.Image || '',
    forSale: productInfo?.forSale || false,
    forRent: productInfo?.forRent || false,
    status: productInfo?.status || false,
    id: productInfo?.id
  });
  const history = useHistory();

  const handleInputChange = (e) => {
    setCreateProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productInfo.id) {
      updateProduct(createProduct.id, createProduct).then((response) => setProducts(response));
    } else {
      addProduct(createProduct).then((response) => setProducts(response));
      history.push('/admin/inventory');
    }
  };
  return (
    <div>
      <h1>{formTitle}</h1>
      <Form
        autoComplete='off'
        onSubmit={handleSubmit}
      >
      { softDelete && admin
        ? ''
        : <React.Fragment>
        <Label>Product Name</Label>
        <Input
          name='productName'
          type='text'
          value={createProduct.productName}
          onChange={handleInputChange}
        />
        </React.Fragment>
      }
      { softDelete && admin
        ? ''
        : <React.Fragment>
        <Label>Product Description</Label>
        <Input
          name='productDescription'
          type='text'
          value={createProduct.productDescription}
          onChange={handleInputChange}
        />
        </React.Fragment>
      }
      { softDelete && admin
        ? ''
        : <React.Fragment>
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
        </React.Fragment>
      }
      { softDelete && admin
        ? ''
        : <React.Fragment>
        <Label>Price</Label>
        <Input
          name='price'
          type='text'
          value={createProduct.price}
          onChange={handleInputChange}
        />
        </React.Fragment>
      }
      { softDelete && admin
        ? ''
        : <React.Fragment>
        <Label>Quantity</Label>
        <Input
          name='quantity'
          type='text'
          value={createProduct.quantity}
          onChange={handleInputChange}
        />
        </React.Fragment>
      }
      { softDelete && admin
        ? ''
        : <React.Fragment>
        <Label>Image</Label>
        <Input
          name='Image'
          type='text'
          value={createProduct.Image}
          onChange={handleInputChange}
        />
        </React.Fragment>
      }
      { softDelete && admin
        ? ''
        : <React.Fragment>
        <Input
          name='forSale'
          type='checkbox'
          checked={createProduct.forSale}
          onChange={handleInputChange}
        />
        <Label check>For Sale</Label>
        </React.Fragment>
      }
        <br/>
      { softDelete && admin
        ? ''
        : <React.Fragment>
        <Input
          name='forRent'
          type='checkbox'
          checked={createProduct.forRent}
          onChange={handleInputChange}
        />
        <Label check>For Rent</Label>
        </React.Fragment>
      }
        <br />
      { softDelete && admin
        ? <React.Fragment>
        <Input
          name='status'
          type='checkbox'
          checked={createProduct.status}
          onChange={handleInputChange}
        />
        <Label check>Click if In Stock</Label>
        </React.Fragment>
        : ''
      }
        <br />
        <br />
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

ProductForm.propTypes = {
  formTitle: PropTypes.string,
  setProducts: PropTypes.func,
  productInfo: PropTypes.object,
  editProduct: PropTypes.bool,
  softDelete: PropTypes.bool,
  admin: PropTypes.bool,
};

export default ProductForm;
