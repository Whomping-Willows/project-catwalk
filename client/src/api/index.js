/* eslint-disable no-console */
import axios from 'axios';

const reviewsGETtest = () => {
  axios.get('/api/reviews')
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const questionsGETtest = () => {
  axios.get('/api/questions')
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const productGETtest = () => {
  axios.get('/api/products')
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default { reviewsGETtest, questionsGETtest, productGETtest };
