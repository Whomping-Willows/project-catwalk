import 'regenerator-runtime/runtime';

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

describe("App-wide API tests", () => {

  it("should performa a get request", async () => {
    await request(app)
      .get('/api')
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it("should performa a put request", async () => {
    await request(app)
      .put('/api')
      .expect(200);
  });
});
