/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import RelatedProductsList from './RelatedProductsList.jsx';
import YourOutFitList from './YourOutFitList.jsx';
import api from '../../api/requests.js';
import end from '../../api/endpoints.js';

const Related = () => {
  //const [ProductId, setProductId] = useState();
  const [RelatedProductsId, setRelatedProductsId] = useState([]);
  console.log('my data', RelatedProductsId);
  console.log('I run with every render');

  useEffect(() => {
    console.log('I only run one');
    const getRelatedProductsId = () => {
      api.getRequest(end.relatedProducts, setRelatedProductsId);
      // console.log('data after request', data);
      // setRelatedProductsId(data);
    };
    getRelatedProductsId();
  }, []);
  console.log('this is related data', RelatedProductsId);
  return (
    <div className="related">
      <h2 id="relatedProductsTitle">RELATED PRODUCTS</h2>
      <div id="relatedProducts">
        <RelatedProductsList RelatedProductsId={RelatedProductsId}/>
      </div>

      <h2 id="relatedOutFitTitle">RELATED OUTFITS</h2>
      <div id="relatedOutfit">
        <YourOutFitList/>
      </div>
    </div>
);
}

export default Related;
