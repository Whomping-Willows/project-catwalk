import 'regenerator-runtime/runtime';

const app = require('filenamepath')
const request = require('supertest');
// const express = require('express');

// const app = express();

// app.get('/api', (req, res) => {
//   res.status(200).json({ name: 'john' });
// });

// app.put('/api', (req, res) => {
//   res.status(200).json({ name: 'john' });
// });

describe('App-wide server tests', () => {
  it('should performa a get request', () => {
    request(app)
      .get('/api')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '15')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
      });
  });

  it('should performa a put request', () => {
    request(app)
      .put('/api')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '15')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
      });
  });
});
