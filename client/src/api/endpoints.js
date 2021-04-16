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
const apiProductId = 1;

/// ///////////////////////////////////////////////
// ENDPOINTS /////////////////////////////////////
/// ///////////////////////////////////////////////

const apiRoot = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';

// Retrieves the list of products
// uses page and count params
const apiListProduct = '/products';

// Returns the id's of products related to the product specified.
const apiGetListInfo = `/products/${apiProductId}`;

export default {
  apiRoot,
  apiListProduct,
  apiGetListInfo,
  apiProductId,
  apiPageParam,
  apiPageParamStr,
  apiCountParam,
  apiCountParamStr,
};
