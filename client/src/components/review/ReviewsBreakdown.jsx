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
    <ReviewsSummary metaData={props.reviewsMetaData} />
    <ReviewsFilter metaData={props.reviewsMetaData} />
    <ReviewsChars metaData={props.reviewsMetaData} />
  </div>
);

export default ReviewsBreakdown;
