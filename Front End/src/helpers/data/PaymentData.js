import axios from 'axios';
import { sqlConfig } from '../apiKeys';

const dbUrl = sqlConfig.sqlDatabaseURL;

const getUserPayments = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/payment/users/${userId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addPayment = (newPayment) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/api/payment`, newPayment)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export { getUserPayments, addPayment };
