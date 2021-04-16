// STATE VARIABLES ///////////////////////////////////

const page = 0;
const count = 5;
// Changes the sort order of reviews to be based on "newest", "helpful", or "relevant"
const sort = 'relevant';
const productId = 18078;
const questionsId = 114290;

// PARAM QUERY STRINGS ///////////////////////////////

const apiPageQuery = `?page=${page}`;
const apiCountQuery = `?count=${count}`;
const apiSortQuery = `?sort=${sort}`;
const apiProductIdQuery = `?product_id=${productId}`;

// ENDPOINTS /////////////////////////////////////

const end = {
  root: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld',
  // Retrieves the list of products
  // uses page and count params
  listProducts: '/products',
  // Returns the id's of products related to the product specified.
  listInfo: `/products/${productId}`,
  // Returns the all styles available for the given product.
  productStyles: `/products/${productId}/styles`,
  // Returns the id's of products related to the product specified.
  relatedProducts: `/products/${productId}/related`,
  // Returns a list of reviews for a particular product.
  // This list does not include any reported reviews.
  // uses page, count, sort, product_id
  reviews: `/reviews/${apiPageQuery}&${apiCountQuery}&${apiSortQuery}&${apiProductIdQuery}`,
  // Returns review metadata for a given product.
  reviewsMeta: `/reviews/meta/${apiProductIdQuery}`,
  // Retrieves a list of questions for a particular product.
  // This list does not include any reported questions.
  // uses productId, page and count
  listQuestions: `/qa/questions/${productId}&${page}&${count}`,
  // Returns answers for a given question.
  // This list does not include any reported answers.
  // uses page and count
  answersList: `/qa/questions/${questionsId}/answers`,
};

export default end;
