/* eslint-disable import/extensions */
import React from 'react';
import ReviewsBreakdown from './ReviewsBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';
import ReviewsForm from './ReviewsForm.jsx';

const Reviews = () => (
  <div className="reviews">
    <ReviewsBreakdown />
    <ReviewsList />
    <ReviewsForm />
  </div>
);

export default Reviews;
