/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import end from '../../api/endpoints.js';
import api from '../../api/requests.js';

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

const ReviewsItem = (props) => {
  const putHelpfulness = () => {
    console.log('Endpoint param from ReviewsItem ', end.reviewsHelpful);
    api.putRequest(end.reviewsHelpful);
  };

  const putReportReview = () => {
    console.log('Endpoint param from ReviewsItem ', end.reviewsHelpful);
    api.putRequest(end.reviewsReport);
  };

  return (
    <div id="reviewItem">
      <div id="reviewSubTitleStars">[STARS GO HERE]</div>
      <div id="reviewSubTitleUserDate">
        {props.reviewsProductData.results[2].reviewer_name}
        ,
        {' '}
        {formatDate(props.reviewsProductData.results[2].date)}
      </div>
      <h3 id="reviewTitle">{props.reviewsProductData.results[2].summary}</h3>
      <p id="reviewBody">{props.reviewsProductData.results[2].body}</p>
      {props.reviewsProductData.results[0].recommend
      && (
      <div>
        <i className="fas fa-check" />
        <p id="reviewIsRec">I recommend this product</p>
      </div>
      )}
      {props.reviewsProductData.results[2].response
      && (
      <div id="reviewResponse">
        <p id="reviewResponseTitle">Response: </p>
        <p id="reviewResponseBody">{props.reviewsProductData.results[2].response}</p>
      </div>
      )}
      <div id="reviewHelpfulness">
        Helpful?
        <p onClick={putHelpfulness}>
          Yes(
          {props.reviewsProductData.results[2].helpfulness}
          ) |
        </p>
        <p onClick={putReportReview}>  Report</p>
      </div>
    </div>
  );
};

export default ReviewsItem;
