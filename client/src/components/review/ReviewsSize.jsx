import React from 'react';
import HSBar from 'react-horizontal-stacked-bar-chart';

const ReviewsSize = (props) => {
  const sizeValue = 3.6;
  // Number(props.metaData.characteristics.Fit.value).toFixed(1);

  return (
    <div id="reviewsSizeDiv">
      <p className="reviewsLabel">Size</p>
      {sizeValue < 1.5 && (
      <div id="reviewsChar1">
        <i className="fa fa-caret-down fa-lg" id="size" aria-hidden="true" />
      </div>
      )}
      {sizeValue >= 1.5 && sizeValue < 2.5 && (
      <div id="reviewsChar2">
        <i className="fa fa-caret-down fa-lg" id="size" aria-hidden="true" />
      </div>
      )}
      {sizeValue >= 2.5 && sizeValue < 3.5 && (
      <div id="reviewsChar3">
        <i className="fa fa-caret-down fa-lg" id="size" aria-hidden="true" />
      </div>
      )}
      {sizeValue >= 3.5 && sizeValue < 4.5 && (
      <div id="reviewsChar4">
        <i className="fa fa-caret-down fa-lg" id="size" aria-hidden="true" />
      </div>
      )}
      {sizeValue >= 4.5 && (
      <div id="reviewsChar5">
        <i className="fa fa-caret-down fa-lg" id="size" aria-hidden="true" />
      </div>
      )}
      <div id="reviewsSizeData">
        <HSBar position="relative" z-index="-1" height={10} data={[{ value: 20, color: 'lightgrey' }, { value: 2, color: 'white' }, { value: 20, color: 'lightgrey' }, { value: 2, color: 'white' }, { value: 20, color: 'lightgrey' }]} className="reviewsBar" />
      </div>
      <table id="reviewsSizeTable">
        <tr>
          <td className="reviewsFilterLabel" id="reviewsCharLeft">Too Small</td>
          <td className="reviewsFilterLabel" id="reviewsCharMiddle">Perfect</td>
          <td className="reviewsFilterLabel" id="reviewsCharRight">Too Big</td>
        </tr>
      </table>
    </div>
  );
};

export default ReviewsSize;
