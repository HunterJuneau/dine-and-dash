import axios from 'axios';
import { sqlConfig } from '../apiKeys';

const dbUrl = sqlConfig.sqlDatabaseURL;

const getUserOrderDetails = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/productOrder/order/${orderId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getUserOrderDetails;
