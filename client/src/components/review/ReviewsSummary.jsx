/* eslint-disable react/prop-types */
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

const ReviewsSummary = ({ productData, metaData }) => (
  <div id="reviewsSummary">
    {productData.results.length > 0 && (
      <div id="reviewsSumNum">{getReviewsAvg(metaData)}</div>
    )}
    <div id="reviewsSumStars">
      <Stars />
    </div>
    {productData.results.length > 0 && (
      <div id="reviewsSumRec">
        <p>
          {getPercentStr(metaData)}
          {' '}
          of reviews recommend this product
        </p>
      </div>
    )}
  </div>
);

export default ReviewsSummary;
