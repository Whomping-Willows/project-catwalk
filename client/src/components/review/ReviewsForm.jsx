/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import { ApiContext } from '../../contexts/api.context.jsx';
import StarsReviewForm from './StarsReviewForm.jsx';

const ReviewsForm = (props) => {
  const { productName } = useContext(ApiContext);

  const addChars = (metaData) => {
    const array = [];
    for (const key in metaData) {
      array.push(metaData[key]);
    }
    return array;
  };

  const chars = addChars(props.reviewsMetaData.characteristics);

  return (
    <form className="reviewsForm">
      <div id="reviewsFormTitleDiv">
        <h2 id="reviewsFormTitle">Write Your Review</h2>
        <h3 className="reviewsFormSub">
          For
          {` ${productName}`}
        </h3>
      </div>
      <div id="reviewsOverallRatingDiv">
        <h3 className="reviewsFormLabelsMain" id="overallRatingStars">Overall Rating</h3>
        <StarsReviewForm id="overallRatingStars" />
      </div>
      <div id="reviewsFormRecDiv">
        <h3 className="reviewsFormLabelsMain">Do you recommend this product?</h3>
        <label htmlFor="ReviewsYes" className="reviewsFormLabelsSm">Yes</label>
        <input type="radio" id="ReviewsYes" value="Yes" />
        <label htmlFor="ReviewsNo" className="reviewsFormLabelsSm">Yes</label>
        <input type="radio" id="ReviewsNo" value="No" />
      </div>
      <div id="reviewsFormCharDiv">
        {chars.Size && (
          <h3 className="reviewsFormLabelsMain">Size</h3>
        <label htmlFor="Size1" className="reviewsFormLabelsSm">A size too small</label>
        <input type="radio" id="Size1" value="1" />
        <label htmlFor="Size2" className="reviewsFormLabelsSm">1/2 size too small</label>
        <input type="radio" id="Size2" value="2" />
        <label htmlFor="Size3" className="reviewsFormLabelsSm">Perfect</label>
        <input type="radio" id="Size3" value="3" />
        <label htmlFor="Size4" className="reviewsFormLabelsSm">1/2 size too big</label>
        <input type="radio" id="Size4" value="4" />
        <label htmlFor="Size5" className="reviewsFormLabelsSm">A size too big</label>
        <input type="radio" id="Size5" value="5" />
        )}

      </div>

    </form>
  );
};

export default ReviewsForm;
