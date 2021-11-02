import axios from 'axios';
import config from '../apiKeys';

const dbUrl = config.databaseURL;

const getAllUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/user`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getAllUsers;
