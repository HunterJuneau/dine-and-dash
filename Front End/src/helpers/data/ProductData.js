import axios from 'axios';
// import config from '../apiKeys';

// const dbUrl = config.databaseURL;

const getAllProducts = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:28713/api/products')
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getAllProducts;
