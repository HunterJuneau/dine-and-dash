import axios from 'axios';
import config from '../apiKeys';

const dbUrl = config.databaseURL;

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

const getProductByForSaleOrRent = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/products/forSale`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getAllProducts,
  getSingleProduct,
  getProductByType,
  getProductByForSaleOrRent
};
