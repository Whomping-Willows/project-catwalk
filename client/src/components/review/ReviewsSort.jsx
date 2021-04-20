/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import getNumOfReviews from '../../helpers/getNumOfReviews.js';

const ReviewsSort = (props) => (
  <div id="reviewsSort">
    <h3>
      {getNumOfReviews(props.reviewsMetaData)}
      {' '}
      reviews, sorted by relevance
    </h3>
  </div>
);

export default ReviewsSort;
