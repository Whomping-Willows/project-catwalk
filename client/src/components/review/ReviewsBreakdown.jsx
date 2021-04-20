/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ReviewsSummary from './ReviewsSummary.jsx';
import ReviewsFilterBlock from './ReviewsFilterBlock.jsx';
import ReviewsCharBlock from './ReviewsCharBlock.jsx';

const rmetaData = {
  product_id: '18078',
  ratings: {
    1: '5', 2: '11', 3: '5', 4: '8', 5: '16', 6: '1',
  },
  recommended: { false: '24', true: '22' },
  characteristics: {
    Fit: { id: 60618, value: '2.3125000000000000' },
    Length: { id: 60619, value: '2.5000000000000000' },
    Comfort: { id: 60620, value: '2.6250000000000000' },
    Quality: { id: 60621, value: '2.6250000000000000' },
  },
};

const ReviewsBreakdown = () => {
  const [reviewsMetaData, setReviewsMetaData] = useState(rmetaData);

  return (
    <div id="reviewsBreakdown">
      <ReviewsSummary reviewsMetaData={reviewsMetaData} />
      <ReviewsFilterBlock reviewsMetaData={reviewsMetaData} />
      <ReviewsCharBlock reviewsMetaData={reviewsMetaData} />
    </div>
  );
};

export default ReviewsBreakdown;
