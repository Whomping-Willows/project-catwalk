/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import getNumOfReviews from '../../helpers/getNumOfReviews.js';

const ReviewsSort = (props) => {
  const changeSort = (e) => {
    const option = e.target.innerHTML;
    if (option === 'relevance') {
      const reviewsRelevant = props.reviewData.results.slice();
      props.setReviewsInList(reviewsRelevant);
    } else if (option === 'helpfulness') {
      const reveiwsHelpfulList = props.reviewData.results.sort((a, b) => b.helpfulness - a.helpfulness);
      props.setReviewsInList(reveiwsHelpfulList);
    } else if (option === 'newest') {
      const reveiwsNewest = props.reviewData.results.sort((a, b) => new Date(b.date) - new Date(a.date));
      props.setReviewsInList(reveiwsNewest);
    }
  };

  return (
    <div id="reviewsSort">
      <h3 id="sortTitle">
        {getNumOfReviews(props.reviewsMetaData)}
        {' '}
        reviews, sorted by
      </h3>
      <div className="reviewsSortMenuDiv">
        <div className="dropdown">
          <div className="dropbtn">
            relevance
            <i className="fa fa-caret-down" id="sortCaret" />
          </div>

          <div className="dropdown-content">
            <div role="button" tabIndex={0} onClick={changeSort} onKeyDown={changeSort}>relevance</div>
            <div role="button" tabIndex={0} onClick={changeSort} onKeyDown={changeSort}>newest</div>
            <div role="button" tabIndex={0} onClick={changeSort} onKeyDown={changeSort}>helpfulness</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSort;
