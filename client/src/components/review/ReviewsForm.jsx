/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useContext, useState } from 'react';
import { ApiContext } from '../../contexts/api.context.jsx';
import StarsReviewForm from './StarsReviewForm.jsx';

const ReviewsForm = (props) => {
  const {
    productId, productName, postRequest, end,
  } = useContext(ApiContext);

  const [sizeDescription, setSizeDescription] = useState('none selected');
  const [widthDescription, setWidthDescription] = useState('none selected');
  const [comfortDescription, setComfortDescription] = useState('none selected');
  const [qualityDescription, setQualityDescription] = useState('none selected');
  const [lengthDescription, setLengthDescription] = useState('none selected');
  const [fitDescription, setFitDescription] = useState('none selected');

  const [rating, setRating] = useState(0);
  const [summary, setSummary] = useState('Example: Best purchase ever!');
  const [body, setBody] = useState('Why did you like the product or not?');
  const [recommend, setRecommend] = useState();
  const [name, setName] = useState('Example: jackson11!');
  const [email, setEmail] = useState('jackson11@email.com');
  const [characteristics, setCharacteristics] = useState({});

  const chars = props.reviewsMetaData.characteristics;

  const charsDescriptions = {
    size: {
      1: 'A size too small',
      2: '1/2 size too small',
      3: 'Perfect',
      4: '1/2 size too big',
      5: 'A size too big',
    },
    width: {
      1: 'Too narrow',
      2: 'Slightly narrow',
      3: 'Perfect',
      4: 'Slightly wide',
      5: 'Too wide',
    },
    comfort: {
      1: 'Uncomfortable',
      2: 'Slightly uncomfortable',
      3: 'Ok',
      4: 'Comfortable',
      5: 'Perfect',
    },
    quality: {
      1: 'Poor',
      2: 'Below average',
      3: 'What I expected',
      4: 'Pretty great',
      5: 'Perfect',
    },
    length: {
      1: 'Runs short',
      2: 'Slightly short',
      3: 'Perfect',
      4: 'Slightly long',
      5: 'Runs long',
    },
    fit: {
      1: 'Runs tight',
      2: 'Slightly tight',
      3: 'Perfect',
      4: 'Slightly loose',
      5: 'Runs loose',
    },
  };

  const setDescription = (e) => {
    const charName = e.target.name;
    const charValue = Number(e.target.value);
    const oldChar = characteristics;

    if (charName === 'size') {
      setSizeDescription(charsDescriptions[charName][charValue]);
      oldChar[chars.Size.id] = charValue;
      setCharacteristics(oldChar);
    } else if (charName === 'width') {
      setWidthDescription(charsDescriptions[charName][charValue]);
      oldChar[chars.Width.id] = charValue;
      setCharacteristics(oldChar);
    } else if (charName === 'comfort') {
      setComfortDescription(charsDescriptions[charName][charValue]);
      oldChar[chars.Comfort.id] = charValue;
      setCharacteristics(oldChar);
    } else if (charName === 'quality') {
      setQualityDescription(charsDescriptions[charName][charValue]);
      oldChar[chars.Quality.id] = charValue;
      setCharacteristics(oldChar);
    } else if (charName === 'length') {
      setLengthDescription(charsDescriptions[charName][charValue]);
      oldChar[chars.Length.id] = charValue;
      setCharacteristics(oldChar);
    } else if (charName === 'fit') {
      setFitDescription(charsDescriptions[charName][charValue]);
      oldChar[chars.Fit.id] = charValue;
      setCharacteristics(oldChar);
    }
  };

  const endpoint = end.reviewsAdd;

  const bodyForPost = {
    product_id: productId,
    rating,
    summary,
    body,
    recommend,
    name,
    email,
    photo: [],
    characteristics,
  };

  const postReview = () => {
    postRequest(endpoint, bodyForPost);
  };

  return (

    <form className="reviewsForm">

      <div id="reviewsFormTitleDiv">
        <h2 id="reviewsFormTitle">Write Your Review</h2>
        <h3 className="reviewsFormSub">
          For
          {` ${productName}`}
        </h3>
      </div>

      <div className="reviewsFormBorder" id="reviewsOverallRatingDiv">
        <h3 className="reviewsFormLabelsMain" id="overallRatingStars">Overall Rating</h3>
        <StarsReviewForm id="overallRatingStars" required="true" rating={rating} setRating={setRating} />
      </div>

      <div className="reviewsFormBorder" id="reviewsFormRecDiv">
        <h3 className="reviewsFormLabelsMain">Do you recommend this product?</h3>

        <label htmlFor="ReviewsYes" className="reviewsFormLabelsSm">Yes</label>
        <input type="radio" id="ReviewsYes" value="Yes" name="recommend" onClick={() => setRecommend(true)} />

        <label htmlFor="ReviewsNo" className="reviewsFormLabelsSm">No</label>
        <input type="radio" id="ReviewsNo" value="No" name="recommend" onClick={() => setRecommend(false)} />
      </div>

      <div className="reviewsFormBorder" id="reviewsFormCharTitle">Please rate the following factors of this product based on your experience:</div>
      <div id="reviewsFormCharDiv">

        {chars.Size && (
          <div className="charGrid">
            <h3 className="reviewsFormLabelsMain charTitle">Size</h3>
            <p className="reviewsFormLabelsSm charDescription">{sizeDescription}</p>

            <input type="radio" id="Size1" className="char1Radio" value="1" name="size" onClick={setDescription} />
            <label htmlFor="Size1" className="reviewsFormLabelsSm char1Score">1</label>

            <input type="radio" id="Size2" className="char2Radio" value="2" name="size" onClick={setDescription} />
            <label htmlFor="Size2" className="reviewsFormLabelsSm char2Title" id="Size2" />

            <input type="radio" id="Size3" className="char3Radio" value="3" name="size" onClick={setDescription} />
            <label htmlFor="Size3" className="reviewsFormLabelsSm char3Title" id="size3" />

            <input type="radio" id="Size4" className="char4Radio" value="4" name="size" onClick={setDescription} />
            <label htmlFor="Size4" className="reviewsFormLabelsSm char4Title" />

            <input type="radio" id="Size5" className="char5Radio" value="5" name="size" onClick={setDescription} />
            <label htmlFor="Size1" className="reviewsFormLabelsSm char5Score">5</label>
          </div>
        )}

        {chars.Width && (
          <div className="charGrid">
            <h3 className="reviewsFormLabelsMain charTitle">Width</h3>
            <p className="reviewsFormLabelsSm charDescription">{widthDescription}</p>

            <input type="radio" id="Width1" className="char1Radio" value="1" name="width" onClick={setDescription} />
            <label htmlFor="Width1" className="reviewsFormLabelsSm char1Score">1</label>

            <input type="radio" id="Width2" className="char2Radio" value="2" name="width" onClick={setDescription} />
            <label htmlFor="Width2" className="reviewsFormLabelsSm char2Title" />

            <input type="radio" id="Width3" className="char3Radio" value="3" name="width" onClick={setDescription} />
            <label htmlFor="Width3" className="reviewsFormLabelsSm char3Title" id="Width3" />

            <input type="radio" id="Width4" className="char4Radio" value="4" name="width" onClick={setDescription} />
            <label htmlFor="Width4" className="reviewsFormLabelsSm char4Title" id="Width4" />

            <input type="radio" id="Width5" className="char5Radio" value="5" name="width" onClick={setDescription} />
            <label htmlFor="Width5" className="reviewsFormLabelsSm char5Score"> 5</label>
          </div>
        )}

        {chars.Comfort && (
          <div className="charGrid">
            <h3 className="reviewsFormLabelsMain charTitle">Comfort</h3>
            <p className="reviewsFormLabelsSm charDescription">{comfortDescription}</p>

            <input type="radio" id="Comfort1" className="char1Radio" value="1" name="comfort" onClick={setDescription} />
            <label htmlFor="Comfort1" className="reviewsFormLabelsSm char1Score">1</label>

            <input type="radio" id="Comfort2" className="char2Radio" value="2" name="comfort" onClick={setDescription} />
            <label htmlFor="Comfort1" className="reviewsFormLabelsSm char2Title" />

            <input type="radio" id="Comfort3" className="char3Radio" value="3" name="comfort" onClick={setDescription} />
            <label htmlFor="Comfort3" className="reviewsFormLabelsSm char3Title" id="Comfort3" />

            <input type="radio" id="Comfort4" className="char4Radio" value="4" name="comfort" onClick={setDescription} />
            <label htmlFor="Comfort4" className="reviewsFormLabelsSm char4Title" id="Comfort4" />

            <input type="radio" id="Comfort5" className="char5Radio" value="5" name="comfort" onClick={setDescription} />
            <label htmlFor="Comfort5" className="reviewsFormLabelsSm char5Score">5</label>
          </div>
        )}

        {chars.Quality && (
          <div className="charGrid">
            <h3 className="reviewsFormLabelsMain charTitle">Quality</h3>
            <p className="reviewsFormLabelsSm charDescription">{qualityDescription}</p>

            <input type="radio" id="Quality1" className="char1Radio" value="1" name="quality" onClick={setDescription} />
            <label htmlFor="Quality1" className="reviewsFormLabelsSm char1Score">1</label>

            <input type="radio" id="Quality2" className="char2Radio" value="2" name="quality" onClick={setDescription} />
            <label htmlFor="Quality1" className="reviewsFormLabelsSm char2Title" />

            <input type="radio" id="Quality3" className="char3Radio" value="3" name="quality" onClick={setDescription} />
            <label htmlFor="Quality3" className="reviewsFormLabelsSm char3Title" id="Quality3" />

            <input type="radio" id="Quality4" className="char4Radio" value="4" name="quality" onClick={setDescription} />
            <label htmlFor="Quality4" className="reviewsFormLabelsSm char4Title" id="Quality4" />

            <input type="radio" id="Quality5" className="char5Radio" value="5" name="quality" onClick={setDescription} />
            <label htmlFor="Quality5" className="reviewsFormLabelsSm char5Score">5</label>
          </div>
        )}

        {chars.Length && (
          <div className="charGrid">
            <h3 className="reviewsFormLabelsMain charTitle">Length</h3>
            <p className="reviewsFormLabelsSm charDescription">{lengthDescription}</p>

            <input type="radio" id="Length1" className="char1Radio" value="1" name="length" onClick={setDescription} />
            <label htmlFor="Length1" className="reviewsFormLabelsSm char1Score">1</label>

            <input type="radio" id="Length2" className="char2Radio" value="2" name="length" onClick={setDescription} />
            <label htmlFor="Length1" className="reviewsFormLabelsSm char2Title" />

            <input type="radio" id="Length3" className="char3Radio" value="3" name="length" onClick={setDescription} />
            <label htmlFor="Length3" className="reviewsFormLabelsSm char3Title" id="Length3" />

            <input type="radio" id="Length4" className="char4Radio" value="4" name="length" onClick={setDescription} />
            <label htmlFor="Length4" className="reviewsFormLabelsSm char4Title" id="Length4" />

            <input type="radio" id="Length5" className="char5Radio" value="5" name="length" onClick={setDescription} />
            <label htmlFor="Length5" className="reviewsFormLabelsSm char5Score">5</label>
          </div>
        )}

        {chars.Fit && (
          <div className="charGrid">
            <h3 className="reviewsFormLabelsMain charTitle">Fit</h3>
            <p className="reviewsFormLabelsSm charDescription">{fitDescription}</p>

            <input type="radio" id="Fit1" className="char1Radio" value="1" name="fit" onClick={setDescription} />
            <label htmlFor="Fit1" className="reviewsFormLabelsSm char1Score">1</label>

            <input type="radio" id="Fit2" className="char2Radio" value="2" name="fit" onClick={setDescription} />
            <label htmlFor="Fit1" className="reviewsFormLabelsSm char2Title" />

            <input type="radio" id="Fit3" className="char3Radio" value="3" name="fit" onClick={setDescription} />
            <label htmlFor="Fit3" className="reviewsFormLabelsSm char3Title" id="Fit3" />

            <input type="radio" id="Fit4" className="char4Radio" value="4" name="fit" onClick={setDescription} />
            <label htmlFor="Fit4" className="reviewsFormLabelsSm char4Title" id="Fit4" />

            <input type="radio" id="Fit5" className="char5Radio" value="5" name="fit" onClick={setDescription} />
            <label htmlFor="Fit5" className="reviewsFormLabelsSm char5Score">5</label>
          </div>
        )}
      </div>

      <div className="reviewsFormBorder" id="reviewsFormSum">
        <label htmlFor="summary" className="reviewsFormLabelsMain">Reviews Summary</label>
        <input type="text" maxLength="60" className="reviewsFormLabelsSm" id="summary" value={summary} onChange={(e) => setSummary(e.target.value)} />
      </div>

      <div className="reviewsFormBorder reviewsFormLabelsMain" id="reviewsFormBody">
        <label htmlFor="body" className="reviewsFormLabelsMain" id="reviewsFormBodyTitle">Reviews Body</label>
        <input type="text" minLength="50" maxLength="1000" className="reviewsFormLabelsSm" id="body" value={body} onChange={(e) => setBody(e.target.value)} />
      </div>

      <div className="reviewsFormBorder reviewsFormLabelsMain" id="reviewsFormName">
        <label htmlFor="nickname" className="reviewsFormLabelsMain">What is your nickname?</label>
        <input type="text" maxLength="60" className="reviewsFormLabelsSm" id="nickname" value={name} onChange={(e) => setName(e.target.value)} />
        <p className="reviewsFormLabelsSm" id="disclaimer">For privacy reasons, do not use your full name or email address</p>
      </div>

      <div className="reviewsFormBorder reviewsFormLabelsMain" id="reviewsFormEmail">
        <label htmlFor="email" className="reviewsFormLabelsMain">What is your email?</label>
        <input type="text" maxLength="60" className="reviewsFormLabelsSm" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <p className="reviewsFormLabelsSm" id="disclaimer">For authentication reasons, you will not be emailed</p>
      </div>

      <div className="reviewsFormBorder reviewsFormLabelsMain" id="reviewsFormSubmit">
        <button type="button" id="reviewsSubmit" onClick={postReview}>Submit Review</button>
      </div>

    </form>

  );
};

export default ReviewsForm;
