import axios from 'axios';
import { sqlConfig } from '../apiKeys';

const dbUrl = sqlConfig.sqlDatabaseURL;

const getUserPayments = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/payment/users/}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export default getUserPayments;
