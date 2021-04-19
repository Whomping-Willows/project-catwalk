/* eslint-disable import/extensions */
import React from 'react';
import { reviewsData } from './Reviews.jsx';

const formatDate = (string) => {
  let formatted = '';
  const year = string.substring(0, 4);
  const month = string.substring(5, 7);
  const day = string.substring(8, 10);

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthNumber = Number(month);
  const monthString = monthNames[monthNumber - 1];

  formatted = formatted.concat(monthString, ' ', day, ', ', year);

  return formatted;
};

const ReviewsItem = () => (
  <div id="reviewItem">
    <div id="reviewSubTitleStars">[STARS GO HERE]</div>
    <div id="reviewSubTitleUserDate">
      {reviewsData.results[2].reviewer_name}
      ,
      {' '}
      {formatDate(reviewsData.results[2].date)}
    </div>
    <h3 id="reviewTitle">{reviewsData.results[2].summary}</h3>
    <p id="reviewBody">{reviewsData.results[2].body}</p>
    {reviewsData.results[0].recommend
      && <p id="reviewIsRec">I recommend this product</p>}
    {reviewsData.results[2].response
      && (
      <div id="reviewResponse">
        <h2>Response: </h2>
        <p>{reviewsData.results[2].response}</p>
      </div>
      )}
    <div id="reviewHelpfulness">Helpful? Yes(0) No(0) | Report</div>
  </div>

);

export default ReviewsItem;
