/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../contexts/api.context.jsx';
import getReviewsAvg from '../helpers/getReviewsAvg.js';
import Product from './product/Product.jsx';
import Related from './related/Related.jsx';
import Question from './question/Question.jsx';
import Reviews from './review/Reviews.jsx';

const Stars = () => {
  const [currentProduct, setCurrentProduct] = useState();
  const [currentStyles, setCurrentStyles] = useState();
  const [reviewScore, setReviewScore] = useState();

  const { getRequest, end } = useContext(ApiContext);

  const createReviewsScore = (metaData) => {
    const score = Number(getReviewsAvg(metaData));
    setReviewScore(score);
  };

  useEffect(() => {
    getRequest(end.listInfo, setCurrentProduct);
    getRequest(end.productStyles, setCurrentStyles);
    getRequest(end.reviewsMeta, createReviewsScore);
  }, []);

  return (
    <div className="appContainer">
      <Product
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
        currentStyles={currentStyles}
        setCurrentStyles={setCurrentStyles}
        reviewScore={reviewScore}
      />
      <Related
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
        currentStyles={currentStyles}
        setCurrentStyles={setCurrentStyles}
        reviewScore={reviewScore}
      />
      <Question
        reviewScore={reviewScore}
      />
      <Reviews
        reviewScore={reviewScore}
      />
    </div>
  );
};

export default Stars;
