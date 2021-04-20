/* eslint-disable no-console */
const express = require('express');

const router = express.Router();
const axios = require('axios');
const GITHUB_API_KEY = require('./config.js');

<<<<<<< HEAD

router.get('/api', (req, res) => {
  console.log('this is hearder', req.headers);
  console.log(req.headers.endpoint);
=======
const noData = {};

router.get('/api', (req, res) => {
  console.log('From router get req ', req.headers.endpoint);
>>>>>>> 0554403a61591f1f3e03c2deeafd7ca6f52163ca
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

router.put('/api', (req, res) => {
  console.log('From router put req ', req.body.headers.endpoint);
  axios.put(req.body.headers.endpoint, noData, {
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

// NOT YET WORKING, JUST PLACEHOLDER
router.post('/api', (req, res) => {
  console.log(req.headers.endpoint);
  axios.post(req.headers.endpoint, noData, {
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
