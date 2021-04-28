/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Ratings from 'react-ratings-declarative';

const StarsReviewForm = (props) => {
  const updateRating = (newRating) => {
    props.setRating(newRating);
  };

  return (
    <Ratings
      rating={props.rating}
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
