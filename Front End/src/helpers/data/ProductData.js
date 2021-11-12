import axios from 'axios';
import { sqlConfig } from '../apiKeys';

const dbUrl = sqlConfig.sqlDatabaseURL;

const getAllProducts = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/products`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleProduct = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/products/${id}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getProductByType = (type) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/products/types/${type}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getProductByForSaleOrRent = (value) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/products/forSale?sale=${value}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const addProduct = (newProduct) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/api/products`, newProduct)
    .then((response) => resolve(response.data))
    // .then(() => {
    //   getAllProducts().then((response) => resolve(response));
    // })
    .catch((error) => reject(error));
});

export {
  getAllProducts,
  getSingleProduct,
  getProductByType,
  getProductByForSaleOrRent,
  addProduct
};
