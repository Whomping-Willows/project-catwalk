/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../contexts/api.context.jsx';
import Product from './product/Product.jsx';
import Related from './related/Related.jsx';
import { QuestionProvider } from './question/QuestionContext.jsx';
import Question from './question/Question.jsx';
import Reviews from './review/Reviews.jsx';

const API = () => {
  const [currentProduct, setCurrentProduct] = useState();
  const [currentStyles, setCurrentStyles] = useState();
  const [selectedStyle, setSelectedStyle] = useState();

  const {
    getRequest, end, productId, setProductId, setProductName,
  } = useContext(ApiContext);

  const currentStyleCallback = (data) => {
    setCurrentStyles(data);
    const newStyleId = data.results[0].style_id;
    setSelectedStyle(newStyleId);
  };

  useEffect(() => {
    getRequest(end.listInfo, setCurrentProduct);
    getRequest(end.productStyles, currentStyleCallback);
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
          <Product
            currentProduct={currentProduct}
            setCurrentProduct={setCurrentProduct}
            currentStyles={currentStyles}
            setCurrentStyles={setCurrentStyles}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
          />
          <Related
            handleRelatedChange={handleRelatedChange}
          />
          <QuestionProvider>
            <Question className="question" />
          </QuestionProvider>
          <Reviews />
        </>
        )}
    </div>
  );
};

export default API;
