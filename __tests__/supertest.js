const request = require('supertest');
const express = require('express');
const axios = require('axios');
const GITHUB_API_KEY = require('../server/config.js');

const router = express.Router();
const app = express();
app.use(express.json());
app.use(express.static('./client/dist'));
app.use('/', router);

const noData = {};

router.get('/api', (req, res) => {
  axios.get(req.headers.endpoint, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
    });
});

router.put('/api', (req, res) => {
  axios.put(req.body.headers.endpoint, noData, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
    });
});

test('Get request', () => {
  request(app)
    .get('/api')
    .expect(200)
    .end((err, res) => {
      if (err) throw err;
    });
});

test('Put request', () => {
  request(app)
    .put('/api')
    .expect(200)
    .end((err, res) => {
      if (err) throw err;
    });
});
