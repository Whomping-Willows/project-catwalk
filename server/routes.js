/* eslint-disable no-console */
const express = require('express');

const router = express.Router();
const axios = require('axios');
const GITHUB_API_KEY = require('./config.js');

const noData = {};

router.get('/api', (req, res) => {
  axios.get(req.headers.endpoint, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.error('From routes: ', err);
    });
});

router.put('/api', (req, res) => {
  axios.put(req.body.headers.endpoint, noData, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      console.log('Response from put ', response);
      res.send(response.data);
    })
    .catch((err) => {
      console.error('From routes: ', err);
    });
});

router.post('/api', (req, res) => {
  axios.post(req.body.headers.endpoint, req.body.headers.data, {
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

module.exports = router;
