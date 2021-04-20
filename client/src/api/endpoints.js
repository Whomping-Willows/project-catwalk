/* eslint-disable no-unused-vars */
// STATE VARIABLES ///////////////////////////////////

const page = 1;
const count = 5;
// Changes the sort order of reviews to be based on "newest", "helpful", or "relevant"
const sort = 'helpful';
const productId = 18078;
const questionsId = 114290;
const reviewId = 289038;

// PARAM QUERY STRINGS ///////////////////////////////

const apiPageQuery = `?page=${page}`;
const apiCountQuery = `?count=${count}`;
const apiSortQuery = `?sort=${sort}`;
const apiProductIdQuery = `?product_id=${productId}`;
const apiReviewIdQuery = `?review_id=${reviewId}`;

// ENDPOINTS /////////////////////////////////////

const end = {
  root: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld',
  // Retrieves the list of products
  // uses page and count params
  listProducts: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products${apiPageQuery}&${apiCountQuery}`,
  // Returns the id's of products related to the product specified.
  listInfo: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${productId}`,
  // Returns the all styles available for the given product.
  productStyles: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${productId}/styles`,
  // Returns the id's of products related to the product specified.
  relatedProducts: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${productId}/related`,
  // Returns a list of reviews for a particular product.
  // This list does not include any reported reviews.
  // uses page, count, sort, product_id
  reviews: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/${apiProductIdQuery}`,
  // Returns review metadata for a given product.
  reviewsMeta: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/meta/${apiProductIdQuery}`,
  // Updates a review to show it was found helpful.
  reviewsHelpful: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/${reviewId}/helpful`,
  // Updates a review to show it was reported.
  // This action does not delete the review, but it will not be returned in the above GET request.
  reviewsReport: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/${reviewId}/report`,
  // Retrieves a list of questions for a particular product.
  // This list does not include any reported questions.
  // uses productId, page and count
  listQuestions: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions${apiProductIdQuery}&${apiPageQuery}&${apiCountQuery}`,
  // Returns answers for a given question.
  // This list does not include any reported answers.
  // uses page and count
  answersList: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${questionsId}/answers`,
};

export default end;
