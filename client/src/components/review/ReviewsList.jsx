/* eslint-disable import/extensions */
import React from 'react';
import ReviewsSort from './ReviewsSort.jsx';
import ReviewsItem from './ReviewsItem.jsx';

const ReviewsList = () => (
  <div id="reviewsList">
    <ReviewsSort />
    <div id="reviewsAll">
      <ReviewsItem />
      <ReviewsItem />
    </div>
    <div id="reviewsListButtons">
      <button type="button" id="reviewsLoadMore">MORE REVIEWS</button>
      <button type="button" id="reviewsAdd">
        ADD A REVIEW
        <i className="fas fa-plus" id="reviewsAddPlus" />
      </button>
    </div>
  </div>
);

export default ReviewsList;
