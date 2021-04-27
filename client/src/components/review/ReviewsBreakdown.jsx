/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
import React from 'react';
import ReviewsSummary from './ReviewsSummary.jsx';
import ReviewsFilter from './ReviewsFilter.jsx';
import ReviewsChars from './ReviewsChars.jsx';

const ReviewsBreakdown = (props) => (
  <div id="reviewsBreakdown">
    <ReviewsSummary
      metaData={props.reviewsMetaData}
    />
    <ReviewsFilter
      metaData={props.reviewsMetaData}
      filter={props.filter}
      setFilter={props.setFilter}
      filter5={props.filter5}
      setFilter5={props.setFilter5}
      filter4={props.filter4}
      setFilter4={props.setFilter4}
      filter3={props.filter3}
      setFilter3={props.setFilter3}
      filter2={props.filter2}
      setFilter2={props.setFilter2}
      filter1={props.filter1}
      setFilter1={props.setFilter1}
    />
    <ReviewsChars metaData={props.reviewsMetaData} />
  </div>
);

export default ReviewsBreakdown;
