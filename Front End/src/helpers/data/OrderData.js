import axios from 'axios';
import { sqlConfig } from '../apiKeys';

const dbUrl = sqlConfig.sqlDatabaseURL;

// order data
const getAllOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/order`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleOrderById = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/order/${id}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createOrder = (order) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/api/order`, order)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleUserOrder = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/user/${userId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// Get user's incomplete/current order
const getUsersCart = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/order/user/incomplete/${userId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});
// product order data
const getAllProductOrderById = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/productOrder/${id}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getAllProductOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/ProductOrder/`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createProductOrder = (productOrder) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/api/productOrder`, productOrder)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getAllProductOrderById,
  getAllProductOrders,
  createOrder,
  getAllOrders,
  getSingleOrderById,
  getSingleUserOrder,
  createProductOrder,
  getUsersCart,
};
