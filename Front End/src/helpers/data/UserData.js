import axios from 'axios';
import { sqlConfig } from '../apiKeys';

const dbUrl = sqlConfig.sqlDatabaseURL;

const getAllUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/user`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleUser = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/user/${id}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const createUser = (userInfo) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/api/user`, userInfo)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// const createNewUser = (user) => new Promise((resolve, reject) => {
//   axios.post(`${config.baseUrl}/api/users`, user)
//   .then(response => resolve(response.data))
//   .catch(error => reject(error));
// });

const getUserOrders = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/order/user/${userId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getUserCompletedOrders = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/order/user/${userId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getUserByFBKey = (FbUid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/users/auth/${FbUid}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export {
  getAllUsers,
  getSingleUser,
  createUser,
  getUserOrders,
  getUserCompletedOrders,
  getUserByFBKey
};
