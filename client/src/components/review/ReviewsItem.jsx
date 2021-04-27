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
import formatDate from '../../helpers/formatDate.js';

const ReviewsItem = (props) => {
  const { end, putRequest } = useContext(ApiContext);

  const putHelpfulness = () => {
    putRequest(end.reviewsHelpful, null);
  };

  const putReportReview = () => {
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
      <div id="reviewIsRecDiv">
        <i className="fas fa-check" />
        <div id="reviewIsRec">I recommend this product</div>
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
