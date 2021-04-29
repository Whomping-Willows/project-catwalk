/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import ReviewsSummary from './ReviewsSummary.jsx';
import ReviewsFilter from './ReviewsFilter.jsx';
import ReviewsChars from './ReviewsChars.jsx';

const ReviewsBreakdown = ({
  productData, metaData, filter, setFilter,
}) => (
  <div id="reviewsBreakdown">
    <ReviewsSummary
      metaData={metaData}
      productData={productData}
    />
    <ReviewsFilter
      metaData={metaData}
      filter={filter}
      setFilter={setFilter}
    />
    <ReviewsChars metaData={metaData} />
  </div>
);

export default ReviewsBreakdown;
