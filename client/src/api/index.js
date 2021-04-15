/* eslint-disable no-console */
import axios from 'axios';
import REVIEW_API_KEY from '../../config.js';

const apiRoot = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';

const reviewsEndpoint = '/reviews/meta';
const params = '?product_id=2';

const reviewsGETtest = () => {
  axios.get(`${apiRoot}${reviewsEndpoint}${params}`, {
    headers: {
      Authorization: REVIEW_API_KEY,
    },
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const questionsGETtest = () => {
  axios.get(`${apiRoot}/qa/questions/1/answers`, {
    headers: {
      Authorization: REVIEW_API_KEY,
    },
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default { reviewsGETtest, questionsGETtest };
