import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ApiContext = createContext();

const apiDefaultParams = {
  page: 1,
  count: 5,
  sort: 'helpful',
  productId: 18078,
  questionsId: 114290,
  reviewId: 289038,
};

const apiDefaultStrings = {
  apiPageQuery: `?page=${apiDefaultParams.page}`,
  apiCountQuery: `?count=${apiDefaultParams.count}`,
  apiSortQuery: `?sort=${apiDefaultParams.sort}`,
  apiProductIdQuery: `?product_id=${apiDefaultParams.productId}`,
  apiReviewIdQuery: `?review_id=${apiDefaultParams.reviewId}`,
};

const apiDefaultEndpoints = {
  root: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld',
  // Retrieves the list of products
  // uses page and count params
  listProducts: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products${apiDefaultStrings.apiPageQuery}&${apiDefaultStrings.apiCountQuery}`,
  // Returns the id's of products related to the product specified.
  listInfo: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${apiDefaultParams.productId}`,
  // Returns the all styles available for the given product.
  productStyles: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${apiDefaultParams.productId}/styles`,
  // Returns the id's of products related to the product specified.
  relatedProducts: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${apiDefaultParams.productId}/related`,
  // Returns a list of reviews for a particular product.
  // This list does not include any reported reviews.
  // uses page, count, sort, product_id
  reviews: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/${apiDefaultStrings.apiProductIdQuery}`,
  // Returns review metadata for a given product.
  reviewsMeta: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/meta/${apiDefaultStrings.apiProductIdQuery}`,
  // Updates a review to show it was found helpful.
  reviewsHelpful: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/${apiDefaultParams.reviewId}/helpful`,
  // Updates a review to show it was reported.
  // This action does not delete the review, but it will not be returned in the above GET request.
  reviewsReport: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/${apiDefaultParams.reviewId}/report`,
  // Retrieves a list of questions for a particular product.
  // This list does not include any reported questions.
  // uses productId, page and count
  listQuestions: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions${apiDefaultStrings.apiProductIdQuery}&${apiDefaultStrings.apiPageQuery}&${apiDefaultStrings.apiCountQuery}`,
  // Returns answers for a given question.
  // This list does not include any reported answers.
  // uses page and count
  answersList: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${apiDefaultParams.questionsId}/answers`,
};

export const ApiProvider = (props) => {
  const [apiParams, setApiParams] = useState(apiDefaultParams);
  const [apiStrings, setApiQueryStr] = useState(apiDefaultStrings);
  const [apiEndpoints, setApiEndpoints] = useState(apiDefaultEndpoints);

  const getRequest = (endpoint) => {
    axios.get('/api', {
      headers: {
        endpoint,
      },
    })
      .then((response) => {
        console.log('endpoint: ', endpoint);
        console.log(response.data);
      })
      .catch((err) => {
        console.error('From requests: ', err);
      });
  };

  const putRequest = (endpoint) => {
    console.log('Endpoint param from client requests: ', endpoint);
    axios.put('/api', {
      headers: {
        endpoint,
      },
    })
      .then((response) => {
        console.log('endpoint: ', endpoint);
        console.log(response.data);
      })
      .catch((err) => {
        console.error('From requests: ', err);
      });
  };

  // NOT YET WORKING, JUST PLACEHOLDER
  const postRequest = (endpoint) => {
    axios.post('/api', {
      headers: {
        endpoint,
        data: [],
      },
    })
      .then((response) => {
        console.log('endpoint: ', endpoint);
        console.log(response.data);
      })
      .catch((err) => {
        console.error('From requests: ', err);
      });
  };

  return (
    <ApiContext.Provider value={{
      apiParams, apiStrings, apiEndpoints, getRequest, putRequest, postRequest,
    }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};
