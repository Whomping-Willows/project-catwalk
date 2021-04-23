/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
import React from 'react';
import Stars from '../Stars.jsx';
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
    <div id="reviewsSumNum">{getReviewsAvg(props.metaData)}</div>
    <div id="reviewsSumStars">
      <Stars />
    </div>
    <div id="reviewsSumRec">
      <p>
        {getPercentStr(props.metaData)}
        {' '}
        of reviews recommend this product
      </p>
    </div>
  </div>
);

export default ReviewsSummary;
