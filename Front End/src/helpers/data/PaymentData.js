import axios from 'axios';
import { sqlConfig } from '../apiKeys';

const dbUrl = sqlConfig.sqlDatabaseURL;

const getUserPayments = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/payment/users/${userId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getUserPayments;
