/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import 'regenerator-runtime/runtime';

const request = require('supertest');
const app = require('../server/index.js');

const getEndpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/18078/styles';
const putEndpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/289038/helpful';

describe('App-wide server tests', () => {
  it('should performa a get request', (done) => {
    request(app)
      .get('/api')
      .send({
        headers: {
          endpoint: getEndpoint,
        },
      })
      .expect((res) => {
        res.data.product_id = '18078';
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  it('should performa a put request', (done) => {
    request(app)
      .put('/api')
      .send({
        headers: {
          endpoint: putEndpoint,
        },
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
