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

export { getAllProducts, getSingleProduct };
