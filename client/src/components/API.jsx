/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../contexts/api.context.jsx';
import Product from './product/Product.jsx';
import Related from './related/Related.jsx';
import Question from './question/Question.jsx';
import Reviews from './review/Reviews.jsx';

const API = () => {
  const [currentProduct, setCurrentProduct] = useState();
  const [currentStyles, setCurrentStyles] = useState();

  const {
    getRequest, end, productId, setProductId, setProductName,
  } = useContext(ApiContext);

  useEffect(() => {
    getRequest(end.listInfo, setCurrentProduct);
    getRequest(end.productStyles, setCurrentStyles);
  }, [productId]);

  useEffect(() => {
    if (currentProduct) {
      setProductName(currentProduct.name);
    }
  }, [currentProduct]);

  const handleRelatedChange = (e) => {
    const newId = e.target.name;
    setProductId(newId);
  };

  return (
    <div className="appContainer">
      {currentProduct && currentStyles
        && (
        <>
          {/* <Product
            currentProduct={currentProduct}
            setCurrentProduct={setCurrentProduct}
            currentStyles={currentStyles}
            setCurrentStyles={setCurrentStyles}
          /> */}
          <Related
            currentProduct={currentProduct}
            handleRelatedChange={handleRelatedChange}
          />
          <Question />
          <Reviews />
        </>
        )}
    </div>
  );
};

export default API;
