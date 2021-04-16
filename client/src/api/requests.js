/* eslint-disable no-console */
import axios from 'axios';

const getRequest = (endpoint) => {
  axios.get('/api', {
    headers: {
      endpoint,
    },
  })
    .then((response) => {
      console.log('endpoint: ', endpoint);
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default { getRequest };
