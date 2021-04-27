/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import Ratings from 'react-ratings-declarative';
import { ApiContext } from '../contexts/api.context.jsx';
import getReviewsAvg from '../helpers/getReviewsAvg.js';

const Stars = () => {
  const [reviewScore, setReviewScore] = useState();

  const { productId, getRequest, end } = useContext(ApiContext);

  const createReviewsScore = (metaData) => {
    const score = Number(getReviewsAvg(metaData));
    setReviewScore(score);
  };

  useEffect(() => {
    getRequest(end.reviewsMeta, createReviewsScore);
  }, [productId]);

  return (
    <Ratings
      rating={reviewScore}
      widgetDimensions="15px"
      widgetSpacings="1px"
    >
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
    </Ratings>
  );
};

export default Stars;

// EXAMPLE TO EDIT STARS
// return (
//   <Ratings
//     rating={reviewScore}
//     widgetDimensions="10px"
//     widgetSpacings="2px"
//   >
//     <Ratings.Widget widgetRatedColor="green" />
//     <Ratings.Widget widgetSpacing="30px" widgetDimension="15px" />
//     <Ratings.Widget widgetRatedColor="black" />
//     <Ratings.Widget widgetRatedColor="rebeccapurple" />
//     <Ratings.Widget />
//   </Ratings>
// );
// FROM HERE: https://github.com/ekeric13/react-ratings-declarative
