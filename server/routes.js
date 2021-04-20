/* eslint-disable no-console */
const express = require('express');

const router = express.Router();
const axios = require('axios');
const GITHUB_API_KEY = require('./config.js');
const data = {};

router.get('/api', (req, res) => {
  console.log('From router get req ', req.headers.endpoint);
  axios.get(req.headers.endpoint, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      console.log('Successful get req ', response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.error('From routes: ', err);
    });
});

// NOT YET WORKING, JUST PLACEHOLDER
router.post('/api', (req, res) => {
  console.log(req.headers.endpoint);
  axios.post(req.headers.endpoint, data, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.error('From routes: ', err);
    });
});

// NOT YET WORKING, JUST PLACEHOLDER
router.put('/api', (req, res) => {
  console.log('From router put req ', req.body.headers.endpoint);
  axios.put(req.body.headers.endpoint, data, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      console.log('Successful router put req ', response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.error('From routes: ', err);
    });
});

module.exports = router;
