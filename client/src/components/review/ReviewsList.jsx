/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import '../../../dist/modalsonly/css/bootstrap.css';
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

  const addTwo = () => {
    const newList = props.reviewsProductData.results.slice(0, index);
    setReviewsInList(newList);
    setIndex(index + 2);
  };

  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

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
        <button type="button" id="reviewsAdd" onClick={showModal}>
          ADD A REVIEW
          <i className="fas fa-plus" id="reviewsAddPlus" />
        </button>
        {/* <Modal show={isOpen} onHide={hideModal} size="lg" id="reviewsModal">
          <Modal.Header>
            <Modal.Title>Hi</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          </Modal.Body>
          <Modal.Footer>
            <button type="button" onClick={hideModal}>Cancel</button>
            <button type="submit">Submit</button>
          </Modal.Footer>
        </Modal> */}
      </div>
    </div>
  );
};

export default ReviewsList;
