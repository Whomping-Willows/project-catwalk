/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../../contexts/api.context.jsx';
import ReviewsBreakdown from './ReviewsBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';
import ReviewsForm from './ReviewsForm.jsx';

const Reviews = () => {
  const [reviewsProductData, setReviewsProductData] = useState();
  const [reviewsMetaData, setReviewsMetaData] = useState();

  const { end, getRequest } = useContext(ApiContext);

  useEffect(() => {
    getRequest(end.reviews, setReviewsProductData);
    getRequest(end.reviewsMeta, setReviewsMetaData);
  }, []);

  return (
    <div className="reviews">
      <h2>RATINGS & REVIEWS</h2>
      <ReviewsBreakdown
        reviewsProductData={reviewsProductData}
        reviewsMetaData={reviewsMetaData}
      />
      <ReviewsList
        reviewsProductData={reviewsProductData}
        reviewsMetaData={reviewsMetaData}
      />
      <ReviewsForm
        reviewsProductData={reviewsProductData}
        reviewsMetaData={reviewsMetaData}
      />
    </div>
  );
};

export default Reviews;
