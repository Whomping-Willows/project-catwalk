/* eslint-disable import/extensions */
import React from 'react';
import ReviewsSort from './ReviewsSort.jsx';
import ReviewsItem from './ReviewsItem.jsx';

const ReviewsList = () => (
  <div className="reviews">
    <ReviewsSort />
    <ReviewsItem />
  </div>
);

export default ReviewsList;
