/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
import React from 'react';
import ReviewsSummary from './ReviewsSummary.jsx';
import ReviewsFilterBlock from './ReviewsFilterBlock.jsx';
import ReviewsCharBlock from './ReviewsCharBlock.jsx';

const ReviewsBreakdown = (props) => (
  <div id="reviewsBreakdown">
    <ReviewsSummary reviewsMetaData={props.reviewsMetaData} />
    <ReviewsFilterBlock reviewsMetaData={props.reviewsMetaData} />
    <ReviewsCharBlock reviewsMetaData={props.reviewsMetaData} />
  </div>
);

export default ReviewsBreakdown;
