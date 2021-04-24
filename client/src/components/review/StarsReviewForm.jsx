/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Ratings from 'react-ratings-declarative';

const StarsReviewForm = () => {
  const [rating, setRating] = useState(0);
  const updateRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <Ratings
      rating={rating}
      changeRating={updateRating}
      widgetDimensions="15px"
      widgetSpacings="1px"
      widgetHoverColors="black"
    >
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
    </Ratings>
  );
};

export default StarsReviewForm;
