import axios from 'axios';
import { sqlConfig } from '../apiKeys';

const dbUrl = sqlConfig.sqlDatabaseURL;

const getUserPayments = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/payment/users/${userId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addPayment = (id, newPayment) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/api/payment`, newPayment)
    .then(() => {
      getUserPayments(id).then((response) => resolve(response));
    })
    .catch((error) => reject(error));
});

const getUpdatedPayment = (id, updatedPayment) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}/api/payment/${id}`, updatedPayment)
    .then(() => {
      getUserPayments(id).then((response) => resolve(response));
    })
    .catch((error) => reject(error));
});

export { getUserPayments, addPayment, getUpdatedPayment };
