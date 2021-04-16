/// ///////////////////////////////////////////////
// PARAMS ////////////////////////////////////////
/// ///////////////////////////////////////////////

// Selects the page of results to return. Default 1
const apiPageParam = 1;
const apiPageParamStr = `/?page=${apiPageParam}`;

// Specifies how many results per page to return. Default 5
const apiCountParam = 5;
const apiCountParamStr = `/?count=${apiCountParam}`;

// Required ID of the Product requested
const apiProductId = 18078;

/// ///////////////////////////////////////////////
// ENDPOINTS /////////////////////////////////////
/// ///////////////////////////////////////////////

const end = {
  root: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld',
  // Retrieves the list of products
  // uses page and count params
  listProducts: '/products',
  // Returns the id's of products related to the product specified.
  listInfo: `/products/${apiProductId}`,
  // Returns the all styles available for the given product.
  productStyles: `/products/${apiProductId}/styles`,
  // Returns the id's of products related to the product specified.
  relatedProducts: `/products/${apiProductId}/related`,
};

export default end;
