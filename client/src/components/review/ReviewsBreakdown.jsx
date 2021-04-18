/* eslint-disable import/extensions */
import React from 'react';
import ReviewsSummary from './ReviewsSummary.jsx';
import ReviewsFilterBlock from './ReviewsFilterBlock.jsx';
import ReviewsCharBlock from './ReviewsCharBlock.jsx';

const ReviewsBreakdown = () => (
  <div className="reviews">
    <ReviewsSummary />
    <ReviewsFilterBlock />
    <ReviewsCharBlock />
  </div>
);

export default ReviewsBreakdown;
