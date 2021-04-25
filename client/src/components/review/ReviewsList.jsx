/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReviewsSort from './ReviewsSort.jsx';
import ReviewsItem from './ReviewsItem.jsx';
import ReviewsForm from './ReviewsForm.jsx';

const ReviewsList = (props) => {
  const [reviewsInList, setReviewsInList] = useState(props.reviewsProductData.results.slice(0, 2));
  const [index, setIndex] = useState(4);
  const [reviews5, setReviews5] = useState(props.reviewsProductData.results.filter((review) => review.rating === 5));
  const [reviews4, setReviews4] = useState(props.reviewsProductData.results.filter((review) => review.rating === 4));
  const [reviews3, setReviews3] = useState(props.reviewsProductData.results.filter((review) => review.rating === 3));
  const [reviews2, setReviews2] = useState(props.reviewsProductData.results.filter((review) => review.rating === 2));
  const [reviews1, setReviews1] = useState(props.reviewsProductData.results.filter((review) => review.rating === 1));
  const [open, setOpen] = useState(false);

  const addTwo = () => {
    const newList = props.reviewsProductData.results.slice(0, index);
    setReviewsInList(newList);
    setIndex(index + 2);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles({
    reviewsModal: {
      position:'absolute',
      top:'10%',
      left:'10%',
      overflow:'scroll',
      height:'100%',
      display:'block'
    },
  });

  const classes = useStyles();

  return (
    <div id="reviewsList">
      <ReviewsSort
        reviewData={props.reviewsProductData}
        reviewsMetaData={props.reviewsMetaData}
        reviewsInList={reviewsInList}
        setReviewsInList={setReviewsInList}
      />
      <div id="reviewsAll">
        {props.filter.length === 0 && reviewsInList.map((review) => (
          <ReviewsItem key={review.review_id} review={review} />
        ))}
        {props.filter.includes(5) && reviews5.map((review) => (
          <ReviewsItem key={review.review_id} review={review} />
        ))}
        {props.filter.includes(4) && reviews4.map((review) => (
          <ReviewsItem key={review.review_id} review={review} />
        ))}
        {props.filter.includes(3) && reviews3.map((review) => (
          <ReviewsItem key={review.review_id} review={review} />
        ))}
        {props.filter.includes(2) && reviews2.map((review) => (
          <ReviewsItem key={review.review_id} review={review} />
        ))}
        {props.filter.includes(1) && reviews1.map((review) => (
          <ReviewsItem key={review.review_id} review={review} />
        ))}
      </div>
      <div id="reviewsListButtons">
        {props.reviewsProductData.results.length > 2
        && props.reviewsProductData.results.length !== reviewsInList.length
          && (
          <button type="button" id="reviewsLoadMore" onClick={addTwo}>MORE REVIEWS</button>
          )}
        <button type="button" id="reviewsAdd" onClick={handleOpen}>
          ADD A REVIEW
          <i className="fas fa-plus" id="reviewsAddPlus" />
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          container={() => document.getElementById('reviews')}
          className={classes.reviewsModal}
        >
          <ReviewsForm reviewsMetaData={props.reviewsMetaData} />
        </Modal >
      </div>
    </div>
  );
};

export default ReviewsList;
