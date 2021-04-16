/* eslint-disable no-console */
const express = require('express');

const router = express.Router();
const axios = require('axios');
const GITHUB_API_KEY = require('./config.js');

router.get('/api', (req, res) => {
  axios.get(req.header.endpoint, {
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

// router.get('/api/questions', (req, res) => {
//   axios.get(`${apiRoot}/qa/questions/${params}`, {
//     headers: { Authorization: GITHUB_API_KEY },
//   })
//     .then((response) => {
//       console.log(response);
//       res.send(response.data);
//     })
//     .catch((err) => {
//       throw (err);
//     });
// });

// router.get('/api/products', (req, res) => {
//   axios.get(`${apiRoot}${productsEndp}/18078/styles`, {
//     headers: { Authorization: GITHUB_API_KEY },
//   })
//     .then((response) => {
//       console.log(response);
//       res.send(response.data);
//     })
//     .catch((err) => {
//       throw (err);
//     });
// });

module.exports = router;

// API ROUTES /////////////////////////////////

// const reviewsEndp = '/reviews';

// // Retrieves the list of products
// const productsEndp = '/products';

// const params = '/?product_id=18078';
