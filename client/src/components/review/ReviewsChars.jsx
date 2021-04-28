/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import ReviewsSize from './ReviewsSize.jsx';
import ReviewsComfort from './ReviewsComfort.jsx';
import ReviewsWidth from './ReviewsWidth.jsx';
import ReviewsQuality from './ReviewsQuality.jsx';
import ReviewsLength from './ReviewsLength.jsx';
import ReviewsFit from './ReviewsFit.jsx';

const ReviewsChars = (props) => (
  <div className="reviewsCharBlock">
    {props.metaData.characteristics.Size && (<ReviewsSize metaData={props.metaData} />)}
    {props.metaData.characteristics.Comfort && (<ReviewsComfort metaData={props.metaData} />)}
    {props.metaData.characteristics.Width && (<ReviewsWidth metaData={props.metaData} />)}
    {props.metaData.characteristics.Quality && (<ReviewsQuality metaData={props.metaData} />)}
    {props.metaData.characteristics.Length && (<ReviewsLength metaData={props.metaData} />)}
    {props.metaData.characteristics.Fit && (<ReviewsFit metaData={props.metaData} />)}
  </div>
);

export default ReviewsChars;
