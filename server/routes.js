/* eslint-disable no-console */
const express = require('express');

const router = express.Router();
const axios = require('axios');
const GITHUB_API_KEY = require('./config.js');

router.get('/api', (req, res) => {
  console.log(req.headers.endpoint);
  axios.get(req.headers.endpoint, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((err) => {
      throw (err);
    });
});

// NOT YET WORKING, JUST PLACEHOLDER
router.post('/api', (req, res) => {
  console.log(req.headers.endpoint);
  axios.post(req.headers.endpoint, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((err) => {
      throw (err);
    });
});

// NOT YET WORKING, JUST PLACEHOLDER
router.put('/api', (req, res) => {
  console.log(req.headers.endpoint);
  axios.put(req.headers.endpoint, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((err) => {
      throw (err);
    });
});

module.exports = router;
