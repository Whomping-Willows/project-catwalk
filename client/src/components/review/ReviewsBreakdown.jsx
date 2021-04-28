/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import ReviewsSummary from './ReviewsSummary.jsx';
import ReviewsFilter from './ReviewsFilter.jsx';
import ReviewsChars from './ReviewsChars.jsx';

const ReviewsBreakdown = ({
  reviewsProductData,
  reviewsMetaData,
  filter, setFilter,
  filter5, setFilter5,
  filter4, setFilter4,
  filter3, setFilter3,
  filter2, setFilter2,
  filter1, setFilter1,
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
      filter5={filter5}
      setFilter5={setFilter5}
      filter4={filter4}
      setFilter4={setFilter4}
      filter3={filter3}
      setFilter3={setFilter3}
      filter2={filter2}
      setFilter2={setFilter2}
      filter1={filter1}
      setFilter1={setFilter1}
    />
    <ReviewsChars metaData={reviewsMetaData} />
  </div>
);

export default ReviewsBreakdown;
