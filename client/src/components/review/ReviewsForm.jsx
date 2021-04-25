/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useContext, Fragment } from 'react';
import { ApiContext } from '../../contexts/api.context.jsx';
import StarsReviewForm from './StarsReviewForm.jsx';

const ReviewsForm = (props) => {
  const { productName } = useContext(ApiContext);

  const chars = props.reviewsMetaData.characteristics;

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
        <>
          <h3 className="reviewsFormLabelsMain">Do you recommend this product?</h3>
        </>
        <label htmlFor="ReviewsYes" className="reviewsFormLabelsSm">Yes</label>
        <input type="radio" id="ReviewsYes" value="Yes" />
        <label htmlFor="ReviewsNo" className="reviewsFormLabelsSm">Yes</label>
        <input type="radio" id="ReviewsNo" value="No" />
      </div>
<div id="reviewsFormCharTitle">Please rate the following factors of this product based on your experience:</div>
      <div id="reviewsFormCharDiv">
        {chars.Size && (
          <div className="charGrid">
            <h3 className="reviewsFormLabelsMain charTitle">Size</h3>
            <label htmlFor="Size1" className="reviewsFormLabelsSm char1Title">A size too small</label>

            <input type="radio" id="Size1" className="char1Radio" value="1" />
            <label htmlFor="Size1" className="reviewsFormLabelsSm char2Title">1/2 size too small</label>

            <input type="radio" id="Size2" className="char2Radio" value="2" />
            <label htmlFor="Size3" className="reviewsFormLabelsSm char3Title" id="Size3">Perfect</label>

            <input type="radio" id="Size3" className="char3Radio" value="3" />
            <label htmlFor="Size4" className="reviewsFormLabelsSm char4Title" id="size4">1/2 size too big</label>

            <input type="radio" id="Size4" className="char4Radio" value="4" />
            <label htmlFor="Size5" className="reviewsFormLabelsSm char5Title">A size too big</label>

            <input type="radio" id="Size5" className="char5Radio" value="5" />
          </div>
        )}

        {chars.Width && (
          <div className="charGrid">
            <h3 className="reviewsFormLabelsMain charTitle">Width</h3>
            <label htmlFor="Width1" className="reviewsFormLabelsSm char1Title">
              Too narrow
            </label>
            <input type="radio" id="Width1" className="char1Radio" value="1" />
            <label htmlFor="Width1" className="reviewsFormLabelsSm char2Title">
              Slightly narrow
            </label>
            <input type="radio" id="Width2" className="char2Radio" value="2" />
            <label htmlFor="Width3" className="reviewsFormLabelsSm char3Title" id="Width3">
              Perfect
            </label>
            <input type="radio" id="Width3" className="char3Radio" value="3" />
            <label htmlFor="Width4" className="reviewsFormLabelsSm char4Title" id="Width4">
              Slightly wide
            </label>
            <input type="radio" id="Width4" className="char4Radio" value="4" />
            <label htmlFor="Width5" className="reviewsFormLabelsSm char5Title">
              Too wide
            </label>
            <input type="radio" id="Width5" className="char5Radio" value="5" />
          </div>
        )}

        {chars.Comfort && (
          <div className="charGrid">
            <h3 className="reviewsFormLabelsMain charTitle">Comfort</h3>
            <label htmlFor="Comfort1" className="reviewsFormLabelsSm char1Title">
              Uncomfortable
            </label>
            <input type="radio" id="Comfort1" className="char1Radio" value="1" />
            <label htmlFor="Comfort1" className="reviewsFormLabelsSm char2Title">
              Slightly uncomfortable
            </label>
            <input type="radio" id="Comfort2" className="char2Radio" value="2" />
            <label htmlFor="Comfort3" className="reviewsFormLabelsSm char3Title" id="Comfort3">
              Ok
            </label>
            <input type="radio" id="Comfort3" className="char3Radio" value="3" />
            <label htmlFor="Comfort4" className="reviewsFormLabelsSm char4Title" id="Comfort4">
              Comfortable
            </label>
            <input type="radio" id="Comfort4" className="char4Radio" value="4" />
            <label htmlFor="Comfort5" className="reviewsFormLabelsSm char5Title">
              Perfect
            </label>
            <input type="radio" id="Comfort5" className="char5Radio" value="5" />
          </div>
        )}

        {chars.Quality && (
          <div className="charGrid">
            <h3 className="reviewsFormLabelsMain charTitle">Quality</h3>
            <label htmlFor="Quality1" className="reviewsFormLabelsSm char1Title">
              Poor
            </label>
            <input type="radio" id="Quality1" className="char1Radio" value="1" />
            <label htmlFor="Quality1" className="reviewsFormLabelsSm char2Title">
              Below average
            </label>
            <input type="radio" id="Quality2" className="char2Radio" value="2" />
            <label htmlFor="Quality3" className="reviewsFormLabelsSm char3Title" id="Quality3">
              What I expected
            </label>
            <input type="radio" id="Quality3" className="char3Radio" value="3" />
            <label htmlFor="Quality4" className="reviewsFormLabelsSm char4Title" id="Quality4">
              Pretty great
            </label>
            <input type="radio" id="Quality4" className="char4Radio" value="4" />
            <label htmlFor="Quality5" className="reviewsFormLabelsSm char5Title">
              Perfect
            </label>
            <input type="radio" id="Quality5" className="char5Radio" value="5" />
          </div>
        )}

        {chars.Length && (
          <div className="charGrid">
            <h3 className="reviewsFormLabelsMain charTitle">Length</h3>
            <label htmlFor="Length1" className="reviewsFormLabelsSm char1Title">
              Runs short
            </label>
            <input type="radio" id="Length1" className="char1Radio" value="1" />
            <label htmlFor="Length1" className="reviewsFormLabelsSm char2Title">
              Runs slightly short
            </label>
            <input type="radio" id="Length2" className="char2Radio" value="2" />
            <label htmlFor="Length3" className="reviewsFormLabelsSm char3Title" id="Length3">
              Perfect
            </label>
            <input type="radio" id="Length3" className="char3Radio" value="3" />
            <label htmlFor="Length4" className="reviewsFormLabelsSm char4Title" id="Length4">
              Runs slightly long
            </label>
            <input type="radio" id="Length4" className="char4Radio" value="4" />
            <label htmlFor="Length5" className="reviewsFormLabelsSm char5Title">
              Runs long
            </label>
            <input type="radio" id="Length5" className="char5Radio" value="5" />
          </div>
        )}

        {chars.Fit && (
          <div className="charGrid">
            <h3 className="reviewsFormLabelsMain charTitle">Fit</h3>
            <label htmlFor="Fit1" className="reviewsFormLabelsSm char1Title">
              Runs tight
            </label>
            <input type="radio" id="Fit1" className="char1Radio" value="1" />
            <label htmlFor="Fit1" className="reviewsFormLabelsSm char2Title">
              Runs slightly tight
            </label>
            <input type="radio" id="Fit2" className="char2Radio" value="2" />
            <label htmlFor="Fit3" className="reviewsFormLabelsSm char3Title" id="Fit3">
              Perfect
            </label>
            <input type="radio" id="Fit3" className="char3Radio" value="3" />
            <label htmlFor="Fit4" className="reviewsFormLabelsSm char4Title" id="Fit4">
              Runs slightly loose
            </label>
            <input type="radio" id="Fit4" className="char4Radio" value="4" />
            <label htmlFor="Fit5" className="reviewsFormLabelsSm char5Title">
              Runs loose
            </label>
            <input type="radio" id="Fit5" className="char5Radio" value="5" />
          </div>
        )}
      </div>

    </form>

  );
};

export default ReviewsForm;
