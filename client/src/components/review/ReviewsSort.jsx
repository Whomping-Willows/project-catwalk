/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import getNumOfReviews from '../../helpers/getNumOfReviews.js';

const ReviewsSort = (props) => {
  const [showOptions, setShowOptions] = useState(false);
  const [currentSort, setCurrentSort] = useState('relevance');

  const changeSort2 = (e) => {
    const option = e.target.innerHTML;
    props.changeSort(e);
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
        {getNumOfReviews(props.reviewsMetaData)}
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

// DROPDOWN VIA CSS
// return (
//   <div id="reviewsSort">
//     <h3 id="sortTitle">
//       {getNumOfReviews(props.reviewsMetaData)}
//       {' '}
//       reviews, sorted by
//     </h3>
//     <div className="reviewsSortMenuDiv">
//       <div className="dropdown">
//         <div className="dropbtn">
//           relevance
//           <i className="fa fa-caret-down" id="sortCaret" />
//         </div>

//         <div className="dropdown-content">
//           <div className="dropdown-label" role="button" tabIndex={0} onClick={changeSort} onKeyDown={changeSort}>relevance</div>
//           <div className="dropdown-label" role="button" tabIndex={0} onClick={changeSort} onKeyDown={changeSort}>newest</div>
//           <div className="dropdown-label" role="button" tabIndex={0} onClick={changeSort} onKeyDown={changeSort}>helpfulness</div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
