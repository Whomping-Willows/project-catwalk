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

  const { getRequest, end } = useContext(ApiContext);

  useEffect(() => {
    getRequest(end.listInfo, setCurrentProduct);
    getRequest(end.productStyles, setCurrentStyles);
  }, []);

  return (
    <div className="appContainer">
      <Product
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
        currentStyles={currentStyles}
        setCurrentStyles={setCurrentStyles}
      />
      <Related
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
        currentStyles={currentStyles}
        setCurrentStyles={setCurrentStyles}
      />
      <Question />
      <Reviews />
    </div>
  );
};

export default API;
