import axios from 'axios';
import config from '../apiKeys';

const dbUrl = config.databaseURL;

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

export { getAllUsers, getSingleUser };
