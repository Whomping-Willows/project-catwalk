/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ReviewsSort from './ReviewsSort.jsx';
import ReviewsItem from './ReviewsItem.jsx';

const ReviewsList = (props) => {
  const [reviewsInList, setReviewsInList] = useState(props.reviewsProductData.results.slice(0, 2));
  const [index, setIndex] = useState(4);

  const addTwo = () => {
    console.log('button clicked');
    const newList = props.reviewsProductData.results.slice(0, index);
    console.log('NewList ', newList);
    setReviewsInList(newList);
    setIndex(index + 2);
  };

  return (
    <div id="reviewsList">
      <ReviewsSort reviewsMetaData={props.reviewsMetaData} />
      <div id="reviewsAll">
        {reviewsInList.map((review) => (
          <ReviewsItem key={review.review_id} review={review} />
        ))}
      </div>
      <div id="reviewsListButtons">
        {props.reviewsProductData.results.length > 2 &&
        props.reviewsProductData.results.length !== reviewsInList.length
          && (
          <button type="button" id="reviewsLoadMore" onClick={addTwo}>MORE REVIEWS</button>
          )}
        <button type="button" id="reviewsAdd">
          ADD A REVIEW
          <i className="fas fa-plus" id="reviewsAddPlus" />
        </button>
      </div>
    </div>
  );
};

export default ReviewsList;
