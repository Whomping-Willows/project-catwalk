/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import getNumOfReviews from '../../helpers/getNumOfReviews.js';

const ReviewsSort = ({ metaData, changeSort }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [currentSort, setCurrentSort] = useState('relevance');

  const changeSort2 = (e) => {
    const option = e.target.innerHTML;
    changeSort(e);
    setCurrentSort(option);
    setShowOptions(false);
  };

  const handleHover = () => {
    setShowOptions(true);
  };

  const handleLeave = () => {
    setShowOptions(false);
  };

  return (
    <div id="reviewsSort">
      <h3 id="sortTitle">
        {getNumOfReviews(metaData)}
        {' '}
        reviews, sorted by
      </h3>
      <div className="reviewsSortMenuDiv">
        {!showOptions && (
          <div className="noDropdown" onMouseOver={handleHover} onFocus={handleHover}>
            <div className="dropbtn">
              {currentSort}
              <i className="fa fa-caret-down" id="sortCaret" />
            </div>
          </div>
        )}
        {showOptions && (
          <div className="dropdown">
            <div className="dropbtn">
              {currentSort}
              <i className="fa fa-caret-down" id="sortCaret" />
            </div>
            <div className="dropdown-content" onMouseOver={handleHover} onMouseLeave={handleLeave} onFocus={handleLeave}>
              <div className="dropdown-label" role="navigation" onClick={changeSort2} onKeyDown={changeSort2}>relevance</div>
              <div className="dropdown-label" role="navigation" onClick={changeSort2} onKeyDown={changeSort2}>newest</div>
              <div className="dropdown-label" role="navigation" onClick={changeSort2} onKeyDown={changeSort2}>helpfulness</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsSort;
