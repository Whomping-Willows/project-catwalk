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
    const score = getReviewsAvg(metaData);
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

// const currentProductDefault = {
//   id: 18078,
//   campus: 'hr-bld',
//   name: 'Camo Onesie',
//   slogan: 'Blend in to your crowd',
//   description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
//   category: 'Jackets',
//   default_price: '140.00',
//   created_at: '2021-02-23T05:08:00.350Z',
//   updated_at: '2021-02-23T05:08:00.350Z',
//   features: [
//     { feature: 'Fabric', value: 'Canvas' },
//     { feature: 'Buttons', value: 'Brass' },
//   ],
// };

// const currentStylesDefault = {
//   product_id: '18078',
//   results: [
//     {
//       style_id: 96887,
//       name: 'Forest Green & Black',
//       original_price: '140.00',
//       sale_price: null,
//       'default?': true,
//       photos: [Array],
//       skus: [Object],
//     },
//     {
//       style_id: 96888,
//       name: 'Desert Brown & Tan',
//       original_price: '140.00',
//       sale_price: null,
//       'default?': false,
//       photos: [Array],
//       skus: [Object],
//     },
//     {
//       style_id: 96889,
//       name: 'Ocean Blue & Grey',
//       original_price: '140.00',
//       sale_price: '100.00',
//       'default?': false,
//       photos: [Array],
//       skus: [Object],
//     },
//     {
//       style_id: 96890,
//       name: 'Digital Red & Black',
//       original_price: '140.00',
//       sale_price: null,
//       'default?': false,
//       photos: [Array],
//       skus: [Object],
//     },
//     {
//       style_id: 96891,
//       name: 'Sky Blue & White',
//       original_price: '140.00',
//       sale_price: '100.00',
//       'default?': false,
//       photos: [Array],
//       skus: [Object],
//     },
//     {
//       style_id: 96892,
//       name: 'Dark Grey & Black',
//       original_price: '170.00',
//       sale_price: null,
//       'default?': false,
//       photos: [Array],
//       skus: [Object],
//     },
//   ],
// };
