const express = require('express');

const router = express.Router();
const axios = require('axios');
const GITHUB_API_KEY = require('./config.js');

// API ROUTES /////////////////////////////////
const apiRoot = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';
const reviewsEndpoint = '/reviews/';
const params = '?product_id=18078';

router.get('/api/reviews', (req, res) => {
  axios.get(`${apiRoot}${reviewsEndpoint}${params}`, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      console.log(response);
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/api/questions', (req, res) => {
  axios.get(`${apiRoot}/qa/questions/${params}`, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      console.log(response);
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/api/products', (req, res) => {
  axios.get(`${apiRoot}/products/18078/styles`, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      console.log(response);
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;