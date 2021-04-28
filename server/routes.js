/* eslint-disable no-console */
const express = require('express');

const router = express.Router();
const axios = require('axios');
const GITHUB_API_KEY = require('./config.js');

const noData = {};

router.get('/api', (req, res) => {
  console.log('From router get req ', req.headers.endpoint);
  axios.get(req.headers.endpoint, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      console.log('Successful router get req');
      res.send(response.data);
    })
    .catch((err) => {
      console.error('From routes: ', err);
    });
});

router.put('/api', (req, res) => {
  console.log('From router put req ', req.body.headers.endpoint);
  axios.put(req.body.headers.endpoint, noData, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      console.log('Response from put ', response);
      console.log('Successful router put req ', response.status, ' ', response.statusText);
      res.send(response.data);
    })
    .catch((err) => {
      console.error('From routes: ', err);
    });
});

router.post('/api', (req, res) => {
  console.log('Post endpoint ', req.body.headers.endpoint);
  console.log('Post data ', req.body.headers.data);
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
