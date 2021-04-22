/* eslint-disable import/no-unresolved */
import React from 'react';
import ReviewsSize from './ReviewsSize.jsx';

const ReviewsChars = (props) => (
  <div className="reviewsChar">
    <ReviewsSize metaData={props.metaData} />
  </div>
);

export default ReviewsChars;
