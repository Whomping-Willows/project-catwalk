/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import HSBar from 'react-horizontal-stacked-bar-chart';

const createChars = (metaData) => {
  const charsInfo = [];

  if (metaData.characteristics.Size) {
    const size = {
      value: Number(metaData.characteristics.Size.value).toFixed(1),
      label: 'Size',
      left: 'Too small',
      middle: 'Perfect',
      right: 'Too big',
    };
    charsInfo.push(size);
  }
  if (metaData.characteristics.Comfort) {
    const comfort = {
      value: Number(metaData.characteristics.Comfort.value).toFixed(1),
      label: 'Comfort',
      left: 'Uncomfortable',
      middle: 'Ok',
      right: 'Perfect',
    };
    charsInfo.push(comfort);
  }
  if (metaData.characteristics.Width) {
    const width = {
      value: Number(metaData.characteristics.Width.value).toFixed(1),
      label: 'Width',
      left: 'Too narrow',
      middle: 'Perfect',
      right: 'Too wide',
    };
    charsInfo.push(width);
  }
  if (metaData.characteristics.Quality) {
    const quality = {
      value: Number(metaData.characteristics.Quality.value).toFixed(1),
      label: 'Quality',
      left: 'Poor',
      middle: 'Ok',
      right: 'Great',
    };
    charsInfo.push(quality);
  }
  if (metaData.characteristics.Length) {
    const length = {
      value: Number(metaData.characteristics.Length.value).toFixed(1),
      label: 'Length',
      left: 'Runs short',
      middle: 'Perfect',
      right: 'Runs long',
    };
    charsInfo.push(length);
  }
  if (metaData.characteristics.Fit) {
    const fit = {
      value: Number(metaData.characteristics.Fit.value).toFixed(1),
      label: 'Fit',
      left: 'Runs tight',
      middle: 'Perfect',
      right: 'Runs loose',
    };
    charsInfo.push(fit);
  }
  return charsInfo;
};

const ReviewsChars = ({ metaData }) => (
  <div className="reviewsCharBlock">
    {createChars(metaData).map((char) => (
      <div className="reviewsCharDiv" key={`${char.label}-${char.value}`}>
        <p className="reviewsLabel">{char.label}</p>
        {char.value < 1.5 && (
        <div id="reviewsChar1">
          <i className="fa fa-caret-down fa-lg" id="charPointer" aria-hidden="true" />
        </div>
        )}
        {char.value >= 1.5 && char.value < 2.5 && (
        <div id="reviewsChar2">
          <i className="fa fa-caret-down fa-lg" id="charPointer" aria-hidden="true" />
        </div>
        )}
        {char.value >= 2.5 && char.value < 3.5 && (
        <div id="reviewsChar3">
          <i className="fa fa-caret-down fa-lg" id="charPointer" aria-hidden="true" />
        </div>
        )}
        {char.value >= 3.5 && char.value < 4.5 && (
        <div id="reviewsChar4">
          <i className="fa fa-caret-down fa-lg" id="charPointer" aria-hidden="true" />
        </div>
        )}
        {char.value >= 4.5 && (
        <div id="reviewsChar5">
          <i className="fa fa-caret-down fa-lg" id="charPointer" aria-hidden="true" />
        </div>
        )}
        <div className="reviewsCharData">
          <HSBar position="relative" z-index="-1" height={10} data={[{ value: 20, color: 'lightgrey' }, { value: 2, color: 'white' }, { value: 20, color: 'lightgrey' }, { value: 2, color: 'white' }, { value: 20, color: 'lightgrey' }]} className="reviewsBar" />
        </div>
        <table className="reviewsCharTable">
          <tbody>
            <tr>
              <td className="reviewsCharLabel" id="reviewsCharLeft">{char.left}</td>
              <td className="reviewsCharLabel" id="reviewsCharMiddle">{char.middle}</td>
              <td className="reviewsCharLabel" id="reviewsCharRight">{char.right}</td>
            </tr>
          </tbody>
        </table>
      </div>
    ))}
  </div>
);

export default ReviewsChars;
