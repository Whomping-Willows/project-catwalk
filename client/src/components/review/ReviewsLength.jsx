/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import HSBar from 'react-horizontal-stacked-bar-chart';

const ReviewsLength = (props) => {
  const lengthValue = Number(props.metaData.characteristics.Length.value).toFixed(1);

  return (
    <div className="reviewsCharDiv">
      <p className="reviewsLabel">Length</p>
      {lengthValue < 1.5 && (
      <div id="reviewsChar1">
        <i className="fa fa-caret-down fa-lg" id="charPointer" aria-hidden="true" />
      </div>
      )}
      {lengthValue >= 1.5 && lengthValue < 2.5 && (
      <div id="reviewsChar2">
        <i className="fa fa-caret-down fa-lg" id="charPointer" aria-hidden="true" />
      </div>
      )}
      {lengthValue >= 2.5 && lengthValue < 3.5 && (
      <div id="reviewsChar3">
        <i className="fa fa-caret-down fa-lg" id="charPointer" aria-hidden="true" />
      </div>
      )}
      {lengthValue >= 3.5 && lengthValue < 4.5 && (
      <div id="reviewsChar4">
        <i className="fa fa-caret-down fa-lg" id="charPointer" aria-hidden="true" />
      </div>
      )}
      {lengthValue >= 4.5 && (
      <div id="reviewsChar5">
        <i className="fa fa-caret-down fa-lg" id="charPointer" aria-hidden="true" />
      </div>
      )}
      <div className="reviewsCharData">
        <HSBar position="relative" z-index="-1" height={10} data={[{ value: 20, color: 'lightgrey' }, { value: 2, color: 'white' }, { value: 20, color: 'lightgrey' }, { value: 2, color: 'white' }, { value: 20, color: 'lightgrey' }]} className="reviewsBar" />
      </div>
      <table className="reviewsCharTable">
        <tr>
          <td className="reviewsCharLabel" id="reviewsCharLeft">Runs Short</td>
          <td className="reviewsCharLabel" id="reviewsCharMiddle">Perfect</td>
          <td className="reviewsCharLabel" id="reviewsCharRight">Runs Long</td>
        </tr>
      </table>
    </div>
  );
};

export default ReviewsLength;
