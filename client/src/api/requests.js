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
      console.error('From requests: ', err);
    });
};

// NOT YET WORKING, JUST PLACEHOLDER
const postRequest = (endpoint) => {
  axios.post('/api', {
    headers: {
      endpoint,
      data: [],
    },
  })
    .then((response) => {
      console.log('endpoint: ', endpoint);
      console.log(response.data);
    })
    .catch((err) => {
      console.error('From requests: ', err);
    });
};

// NOT YET WORKING, JUST PLACEHOLDER
const putRequest = (endpoint) => {
  console.log('Endpoint param from client requests: ', endpoint);
  axios.put('/api', {
    headers: {
      endpoint,
    },
  })
    .then((response) => {
      console.log('endpoint: ', endpoint);
      console.log(response.data);
    })
    .catch((err) => {
      console.error('From requests: ', err);
    });
};

export default { getRequest, putRequest, postRequest };
