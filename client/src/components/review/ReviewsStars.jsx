import React, { useState, useContext, useEffect } from 'react';
import Ratings from 'react-ratings-declarative';

const ReviewsStars = (props) => (
  <Ratings
    rating={props.rating}
    widgetDimensions="15px"
    widgetSpacings="1px"
  >
    <Ratings.Widget />
    <Ratings.Widget />
    <Ratings.Widget />
    <Ratings.Widget />
    <Ratings.Widget />
  </Ratings>
);

export default ReviewsStars;
