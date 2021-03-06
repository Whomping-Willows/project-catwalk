/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  // PARAM VARIABLES AS STATE
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(100);
  const [sort, setSort] = useState('relevant');
  const [productId, setProductId] = useState(18078);
  const [productName, setProductName] = useState('Camo Onesie');
  const [questionId, setQuestionId] = useState(114290);
  const [reviewId, setReviewId] = useState(289038);
  const [answerId, setAnswerId] = useState(1082146);

  // QUERY STRINGS AS VARIABLES
  const apiPageQuery = `?page=${page}`;
  const apiCountQuery = `?count=${count}`;
  const apiSortQuery = `?sort=${sort}`;
  const apiProductIdQuery = `?product_id=${productId}`;

  // ENDPOINTS IN 'END' OBJECT
  const end = {
    root: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld',
    // Retrieves the list of products
    // uses page and count params
    listProducts: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products?page=${page}&count=${count}`,
    // Returns the id's of products related to the product specified.
    listInfo: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${productId}`,
    // Returns the all styles available for the given product.
    productStyles: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${productId}/styles`,
    // Returns the id's of products related to the product specified.
    relatedProducts: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${productId}/related`,
    // Returns a list of reviews for a particular product.
    // This list does not include any reported reviews.
    // uses page, count, sort, product_id
    reviews: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews?count=${count}&sort=${sort}&product_id=${productId}`,
    // Returns review metadata for a given product.
    reviewsMeta: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/meta/${apiProductIdQuery}`,
    // Updates a review to show it was found helpful.
    reviewsHelpful: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/${reviewId}/helpful`,
    // Updates a review to show it was reported.
    // This action does not delete the review, but it will not be returned in the above GET request.
    reviewsReport: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/${reviewId}/report`,
    // Adds a review for the given product.
    reviewsAdd: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews',
    // Retrieves a list of questions for a particular product.
    // This list does not include any reported questions.
    // uses productId, page and count
    listQuestions: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${apiProductIdQuery}&count=${count}`,
    // Returns answers for a given question.
    // This list does not include any reported answers.
    // uses page and count
    addQuestion: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions',

    questionHelpful: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${questionId}/helpful`,

    questionReport: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${questionId}/report`,

    // post to this endpoint to add answer
    answersList: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${questionId}/answers`,

    answerHelpful: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/answers/${answerId}/helpful`,

    answerReport: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/answers/${answerId}/report`,

  };

  // HTTP REQUESTS AS FUNCTIONS
  const getRequest = (endpoint, callback) => axios.get('/api', {
    headers: {
      endpoint,
    },
  })
    .then((response) => {
      callback(response.data);
    })
    .catch((err) => {
      throw err;
    });

  const putRequest = (endpoint) => axios.put('/api', {
    headers: {
      endpoint,
    },
  })
    .then((response) => {
    })
    .catch((err) => {
      throw err;
    });

  const postRequest = (endpoint, data, callback) => axios.post('/api', {
    headers: {
      endpoint,
      data,
    },
  })
    .then((response) => {
      if (callback) {
        callback();
      }
    })
    .catch((err) => {
      throw err;
    });

  return (
    <ApiContext.Provider value={{
      productId, productName, count, setProductId, reviewId, apiProductIdQuery, end, getRequest, putRequest, postRequest, questionId, setQuestionId, answerId, sort, setProductName, setAnswerId, setReviewId,
    }}
    >
      {children}
    </ApiContext.Provider>
  );
};
