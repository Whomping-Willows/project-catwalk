/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import HSBar from 'react-horizontal-stacked-bar-chart';

const ReviewsComfort = (props) => {
  const comfortValue = Number(props.metaData.characteristics.Comfort.value).toFixed(1);

  return (
    <div className="reviewsCharDiv">
      <p className="reviewsLabel">Comfort</p>
      {comfortValue < 1.5 && (
      <div id="reviewsChar1">
        <i className="fa fa-caret-down fa-lg" id="charPointer" aria-hidden="true" />
      </div>
      )}
      {comfortValue >= 1.5 && comfortValue < 2.5 && (
      <div id="reviewsChar2">
        <i className="fa fa-caret-down fa-lg" id="charPointer" aria-hidden="true" />
      </div>
      )}
      {comfortValue >= 2.5 && comfortValue < 3.5 && (
      <div id="reviewsChar3">
        <i className="fa fa-caret-down fa-lg" id="charPointer" aria-hidden="true" />
      </div>
      )}
      {comfortValue >= 3.5 && comfortValue < 4.5 && (
      <div id="reviewsChar4">
        <i className="fa fa-caret-down fa-lg" id="charPointer" aria-hidden="true" />
      </div>
      )}
      {comfortValue >= 4.5 && (
      <div id="reviewsChar5">
        <i className="fa fa-caret-down fa-lg" id="charPointer" aria-hidden="true" />
      </div>
      )}
      <div className="reviewsCharData">
        <HSBar position="relative" z-index="-1" height={10} data={[{ value: 20, color: 'lightgrey' }, { value: 2, color: 'white' }, { value: 20, color: 'lightgrey' }, { value: 2, color: 'white' }, { value: 20, color: 'lightgrey' }]} className="reviewsBar" />
      </div>
      <table className="reviewsCharTable">
        <tr>
          <td className="reviewsFilterLabel" id="reviewsCharLeft">Too Small</td>
          <td className="reviewsFilterLabel" id="reviewsCharMiddle">Perfect</td>
          <td className="reviewsFilterLabel" id="reviewsCharRight">Too Big</td>
        </tr>
      </table>
    </div>
  );
};

export default ReviewsComfort;
