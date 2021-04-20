/* eslint-disable import/extensions */
import React from 'react';
import ReviewsSort from './ReviewsSort.jsx';
import ReviewsItem from './ReviewsItem.jsx';

const ReviewsList = () => (
  <div id="reviewsList">
    <ReviewsSort />
    <ReviewsItem />
  </div>
);

export default ReviewsList;
