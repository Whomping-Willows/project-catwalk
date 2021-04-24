/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState, useEffect, useContext } from 'react';
import RelatedProductsList from './relatedProductsList.jsx';
import YourOutFitList from './yourOutFitList.jsx';
import { ApiContext } from '../../contexts/api.context.jsx';

const Related = () => {
  const [RelatedProductsId, setRelatedProductsId] = useState([]);

  const { end, getRequest } = useContext(ApiContext);

  useEffect(() => {
    getRequest(end.relatedProducts, setRelatedProductsId);
  }, []);

  console.log('this is related data', RelatedProductsId);

  return (
    <div className="related">
      <h2 id="relatedProductsTitle">RELATED PRODUCTS</h2>
      <div id="relatedProducts">
        <RelatedProductsList RelatedProductsId={RelatedProductsId} />
      </div>

      <h2 id="relatedOutFitTitle">RELATED OUTFITS</h2>
      <div id="relatedOutfit">
        <YourOutFitList />
      </div>
    </div>
  );
};

export default Related;
