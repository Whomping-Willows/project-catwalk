/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ReviewsSort from './ReviewsSort.jsx';
import ReviewsItem from './ReviewsItem.jsx';

const ReviewsList = (props) => {
  const [reviewsInList, setReviewsInList] = useState(props.reviewsProductData.results.slice(0, 2));
  const [index, setIndex] = useState(4);
  const [reviews5, setReviews5] = useState(props.reviewsProductData.results.filter((review) => review.rating === 5));
  const [reviews4, setReviews4] = useState(props.reviewsProductData.results.filter((review) => review.rating === 4));
  const [reviews3, setReviews3] = useState(props.reviewsProductData.results.filter((review) => review.rating === 3));
  const [reviews2, setReviews2] = useState(props.reviewsProductData.results.filter((review) => review.rating === 2));
  const [reviews1, setReviews1] = useState(props.reviewsProductData.results.filter((review) => review.rating === 1));

  const addTwo = () => {
    const newList = props.reviewsProductData.results.slice(0, index);
    setReviewsInList(newList);
    setIndex(index + 2);
  };

  return (
    <div id="reviewsList">
      <ReviewsSort reviewsMetaData={props.reviewsMetaData} />
      <div id="reviewsAll">
        {props.filter.rating === 'all' && reviewsInList.map((review) => (
          <ReviewsItem key={review.review_id} review={review} />
        ))}
        {props.filter.rating === 5 && reviews5.map((review) => (
          <ReviewsItem key={review.review_id} review={review} />
        ))}
        {props.filter.rating === 4 && reviews4.map((review) => (
          <ReviewsItem key={review.review_id} review={review} />
        ))}
        {props.filter.rating === 3 && reviews3.map((review) => (
          <ReviewsItem key={review.review_id} review={review} />
        ))}
        {props.filter.rating === 2 && reviews2.map((review) => (
          <ReviewsItem key={review.review_id} review={review} />
        ))}
        {props.filter.rating === 1 && reviews1.map((review) => (
          <ReviewsItem key={review.review_id} review={review} />
        ))}
      </div>
      <div id="reviewsListButtons">
        {props.reviewsProductData.results.length > 2
        && props.reviewsProductData.results.length !== reviewsInList.length
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
