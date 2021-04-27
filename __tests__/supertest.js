/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const request = require('supertest');
const express = require('express');

const app = express();

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });

  request(app)
  .post('/users')
  .send({name: 'john'})
  .set('Accept', 'application/json')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    if (err) return done(err);
    return done();

/*
////////////////////////////////////////////////////////////////
//OUR ATTEMPT AT TESTING OUR OWN SERVER ////////////////////////
////////////////////////////////////////////////////////////////

import 'regenerator-runtime/runtime';

const request = require('supertest');
const app = require('../server/index.js');

const getEndpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/18078/styles';
const putEndpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/289038/helpful';

describe('App-wide server tests', () => {
  it('should performa a get request', async (done) => {
    await request(app)
      .get('/api', {
        headers: {
          endpoint: getEndpoint,
        },
      })
      .expect(200)
      .then(async (response) => {
        expect(res.data.product_id).toBe('18078');
      });
  });

  it('should performa a put request', async (done) => {
    await request(app)
      .put('/api', {
        headers: {
          endpoint: putEndpoint,
        },
      })
      .expect(200, done);
  });
});
*/