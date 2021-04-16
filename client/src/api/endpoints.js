// STATE VARIABLES ///////////////////////////////////
const page = 1;
const count = 5;
const productId = 18078;

// Changes the sort order of reviews to be based on "newest", "helpful", or "relevant"
const sort = 'relevant';

// PARAM QUERY STRINGS ///////////////////////////////

// Selects the page of results to return. Default 1
const apiPageQuery = `?page=${page}`;

// Specifies how many results per page to return. Default 5
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
  reviewsMeta: `reviews/meta/${productId}`,
};

export default end;
