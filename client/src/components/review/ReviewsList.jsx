/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import ReviewsSort from './ReviewsSort.jsx';
import ReviewsItem from './ReviewsItem.jsx';

const ReviewsList = (props) => (
  <div id="reviewsList">
    <ReviewsSort reviewsMetaData={props.reviewsMetaData} />
    <div id="reviewsAll">
      <ReviewsItem reviewsProductData={props.reviewsProductData} />
      <ReviewsItem reviewsProductData={props.reviewsProductData} />
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
