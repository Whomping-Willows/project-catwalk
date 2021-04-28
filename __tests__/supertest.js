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
