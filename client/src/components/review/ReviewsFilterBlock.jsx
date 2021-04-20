/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
import React from 'react';
import HSBar from 'react-horizontal-stacked-bar-chart';
import getNumOfReviews from '../../helpers/getNumOfReviews.js';

const ReviewsFilterBlock = (props) => {
  const percentFor = (data, num) => {
    const total = getNumOfReviews(data);
    const forNum = Number(data.ratings[num]);

    return ((forNum / total) * 100).toFixed(0);
  };

  const reviews5For = Number(percentFor(props.reviewsMetaData, 5));
  const reviews4For = Number(percentFor(props.reviewsMetaData, 4));
  const reviews3For = Number(percentFor(props.reviewsMetaData, 3));
  const reviews2For = Number(percentFor(props.reviewsMetaData, 2));
  const reviews1For = Number(percentFor(props.reviewsMetaData, 1));

  return (
    <div id="reviewsFilterBlock">
      <p className="reviewsFilterLabel" id="reviews5Label">5 Stars</p>
      <div id="reviews5Data">
        <HSBar height={10} data={[{ value: reviews5For, color: 'green' }, { value: 100 - reviews5For, color: 'lightgrey' }]} className="reviewsBar" />
      </div>
      <p className="reviewsFilterLabel" id="reviews4Label">4 Stars</p>
      <div id="reviews4Data">
        <HSBar height={10} data={[{ value: reviews4For, color: 'green' }, { value: 100 - reviews4For, color: 'lightgrey' }]} className="reviewsBar" id="reviews4Data" />
      </div>
      <p className="reviewsFilterLabel" id="reviews3Label">3 Stars</p>
      <div id="reviews3Data">
        <HSBar height={10} data={[{ value: reviews3For, color: 'green' }, { value: 100 - reviews3For, color: 'lightgrey' }]} className="reviewsBar" id="reviews3Data" />
      </div>
      <p className="reviewsFilterLabel" id="reviews2Label">2 Stars</p>
      <div id="reviews2Data">
        <HSBar height={10} data={[{ value: reviews2For, color: 'green' }, { value: 100 - reviews2For, color: 'lightgrey' }]} className="reviewsBar" id="reviews2Data" />
      </div>
      <p className="reviewsFilterLabel" id="reviews1Label">1 Stars</p>
      <div id="reviews1Data">
        <HSBar height={10} data={[{ value: reviews1For, color: 'green' }, { value: 100 - reviews1For, color: 'lightgrey' }]} className="reviewsBar" id="reviews1Data" />
      </div>
    </div>
  );
};

export default ReviewsFilterBlock;
