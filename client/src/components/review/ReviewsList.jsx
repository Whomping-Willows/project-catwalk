/* eslint-disable no-var */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReviewsSort from './ReviewsSort.jsx';
import ReviewsItem from './ReviewsItem.jsx';
import ReviewsForm from './ReviewsForm.jsx';

const ReviewsList = ({ productData, metaData, filter }) => {
  const [reviewsInList, setReviewsInList] = useState(productData.results.slice(0, 2));
  const [index, setIndex] = useState(4);
  const [open, setOpen] = useState(false);

  const filterList = (filterArr) => {
    var newList = [];

    if (filterArr.length === 0) {
      newList = productData.results.slice(0, 2);
      return newList;
    }

    filterArr.forEach((num) => {
      const reviewsWithNumRating = productData.results.filter((review) => review.rating === num);
      reviewsWithNumRating.forEach((review) => {
        newList.push(review);
      });
    });

    return newList;
  };

  useEffect(() => {
    const newList = filterList(filter);
    setReviewsInList(newList);
  }, [productData, filter]);

  const addTwo = () => {
    const newList = productData.results.slice(0, index);
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
      position: 'absolute',
      top: '10%',
      left: '10%',
      overflow: 'scroll',
      height: '100%',
      display: 'block',
    },
  });

  const classes = useStyles();

  const changeSort = (e) => {
    const option = e.target.innerHTML;
    const reviewsRelevant = productData.results.slice();

    if (option === 'relevance') {
      setReviewsInList(reviewsRelevant);
    } else if (option === 'helpfulness') {
      const reveiwsHelpful = reviewsRelevant.sort((a, b) => b.helpfulness - a.helpfulness);
      setReviewsInList(reveiwsHelpful);
    } else if (option === 'newest') {
      const reveiwsNewest = reviewsRelevant.sort((a, b) => new Date(b.date) - new Date(a.date));
      setReviewsInList(reveiwsNewest);
    }
  };

  return (
    <div id="reviewsList">
      <ReviewsSort
        reviewData={productData}
        reviewsMetaData={metaData}
        reviewsInList={reviewsInList}
        setReviewsInList={setReviewsInList}
        changeSort={changeSort}
      />

      <div id="reviewsAll">
        {reviewsInList.map((review) => (
          <ReviewsItem key={review.review_id} review={review} />
        ))}
      </div>
      <div id="reviewsListButtons">
        {productData.results.length > 2
          && productData.results.length !== reviewsInList.length
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
          aria-labelledby="add-a-review-form"
          aria-describedby="to-add-a-new-review"
          container={() => document.getElementById('reviews')}
          className={classes.reviewsModal}
        >
          <ReviewsForm
            reviewsMetaData={metaData}
            handleClose={handleClose}
            setOpen={setOpen}
          />
        </Modal>
      </div>
    </div>
  );
};

export default ReviewsList;
