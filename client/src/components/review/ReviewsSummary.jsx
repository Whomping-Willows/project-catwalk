/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
import React from 'react';
import getReviewsAvg from '../../helpers/getReviewsAvg.js';

const getPercentStr = (metaData) => {
  const no = Number(metaData.recommended.false);
  const yes = Number(metaData.recommended.true);

  const total = no + yes;

  let percent = (yes / total).toFixed(2).toString();
  percent = percent.substring(2).concat('%');

  return percent;
};

const ReviewsSummary = (props) => (
  <div id="reviewsSummary">
    <div id="reviewsSumNum">{getReviewsAvg(props.reviewsMetaData)}</div>
    <div id="reviewsSumStars">[STARS GO HERE]</div>
    <div id="reviewsSumRec">
      <p>
        {getPercentStr(props.reviewsMetaData)}
        {' '}
        of reviews recommend this product
      </p>
    </div>
  </div>
);

export default ReviewsSummary;
