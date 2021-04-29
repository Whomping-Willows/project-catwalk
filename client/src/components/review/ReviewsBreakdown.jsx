/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import ReviewsSummary from './ReviewsSummary.jsx';
import ReviewsFilter from './ReviewsFilter.jsx';
import ReviewsChars from './ReviewsChars.jsx';

const ReviewsBreakdown = ({
  reviewsProductData, reviewsMetaData, filter, setFilter,
}) => (
  <div id="reviewsBreakdown">
    <ReviewsSummary
      metaData={reviewsMetaData}
      productData={reviewsProductData}
    />
    <ReviewsFilter
      metaData={reviewsMetaData}
      filter={filter}
      setFilter={setFilter}
    />
    <ReviewsChars metaData={reviewsMetaData} />
  </div>
);

export default ReviewsBreakdown;
