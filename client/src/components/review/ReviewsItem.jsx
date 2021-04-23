/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { ApiContext } from '../../contexts/api.context.jsx';
import ReviewsStars from './ReviewsStars.jsx';

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
  const { end, putRequest } = useContext(ApiContext);

  const putHelpfulness = () => {
    console.log('Endpoint param from ReviewsItem ', end.reviewsHelpful);
    putRequest(end.reviewsHelpful, null);
  };

  const putReportReview = () => {
    console.log('Endpoint param from ReviewsItem ', end.reviewsReport);
    putRequest(end.reviewsReport, null);
  };

  return (
    <div id="reviewItem">
      <div id="reviewSubTitleStars">
        <ReviewsStars rating={props.review.rating} />
      </div>
      <div id="reviewSubTitleUserDate">
        {props.review.reviewer_name}
        ,
        {' '}
        {formatDate(props.review.date)}
      </div>
      <h3 id="reviewTitle">{props.review.summary}</h3>
      <p id="reviewBody">{props.review.body}</p>
      {props.review.recommend
      && (
      <div>
        <i className="fas fa-check" />
        <p id="reviewIsRec">I recommend this product</p>
      </div>
      )}
      {props.review.response
      && (
      <div id="reviewResponse">
        <p id="reviewResponseTitle">Response: </p>
        <p id="reviewResponseBody">{props.review.response}</p>
      </div>
      )}
      <div className="reviewHelpP" id="reviewHelpfulness">
        Helpful?
        <button type="button" onClick={putHelpfulness} className="reviewHelpP">
          Yes (
          {props.review.helpfulness}
          ) |
        </button>
        <button type="button" onClick={putReportReview} className="reviewHelpP">
          {' '}
          Report
        </button>
      </div>
    </div>
  );
};

export default ReviewsItem;
