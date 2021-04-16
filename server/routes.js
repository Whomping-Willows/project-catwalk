/* eslint-disable no-console */
const express = require('express');

const router = express.Router();
const axios = require('axios');
const GITHUB_API_KEY = require('./config.js');

// API ROUTES /////////////////////////////////
const apiRoot = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';

const reviewsEndp = '/reviews';

// Retrieves the list of products
const productsEndp = '/products';

const params = '/?product_id=18078';

router.get('/api/reviews', (req, res) => {
  axios.get(`${apiRoot}${reviewsEndp}${params}`, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      console.log(response);
      res.send(response.data);
    })
    .catch((err) => {
      throw (err);
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
      throw (err);
    });
});

router.get('/api/products', (req, res) => {
  axios.get(`${apiRoot}${productsEndp}/18078/styles`, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      console.log(response);
      res.send(response.data);
    })
    .catch((err) => {
      throw (err);
    });
});

module.exports = router;
