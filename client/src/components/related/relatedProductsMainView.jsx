import React, { useState, useEffect } from 'react';
import RelatedProductsList from './RelatedProductsList.jsx';
import YourOutFitList from './YourOutFitList.jsx';
import api from '../../api/requests.js';
import end from '../../api/endpoints.js';

const RelatedProductsMainView = (props) => {
  const [productId, setProductId] = useState();
  console.log('I run with every render');

  useEffect(() => {
console.log('I only run one');
const getRelatedProductsId = () => {
  const data = api.getRequest(end.relatedProducts);
}
getRelatedProductsId();
  }, [productId])

  // const getRelatedProductsId = () => {

  // };
  return (
    <div>
      <h1>Related Products</h1>
      <RelatedProductsList />
      <h1>Your OutFit List</h1>
      <YourOutFitList />
      </div>
);
}
export default RelatedProductsMainView;
