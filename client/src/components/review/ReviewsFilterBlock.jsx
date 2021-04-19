/* eslint-disable import/no-unresolved */
import React from 'react';
import HSBar from 'react-horizontal-stacked-bar-chart';

const ReviewsFilterBlock = () => (
  <div id="reviewsFilterBlock">
    <div id="reviews5Stars">
      <p id="reviews5Label">5 Stars</p>
      <div id="reviews5Data">
        <HSBar height={10} width={50} data={[{ value: 7, color: 'green' }, { value: 3, color: 'lightgrey' }]} className="reviewsBar" />
      </div>
    </div>
    <div id="reviews4Stars">
      <p id="reviews4Label">4 Stars</p>
      <HSBar height={10} data={[{ value: 9, color: 'green' }, { value: 1, color: 'lightgrey' }]} className="reviewsBar" id="reviews4Data" />
    </div>
    <div id="reviews3Stars">
      <p id="reviews3Label">3 Stars</p>
      <HSBar height={10} data={[{ value: 1, color: 'green' }, { value: 9, color: 'lightgrey' }]} className="reviewsBar" id="reviews3Data" />
    </div>
    <div id="reviews2Stars">
      <p id="reviews2Label">2 Stars</p>
      <HSBar height={10} data={[{ value: 0, color: 'green' }, { value: 10, color: 'lightgrey' }]} className="reviewsBar" id="reviews2Data" />
    </div>
    <div id="reviews1Stars">
      <p id="reviews1Label">1 Stars</p>
      <HSBar height={10} data={[{ value: 2, color: 'green' }, { value: 8, color: 'lightgrey' }]} className="reviewsBar" id="reviews1Data" />
    </div>
  </div>
);

export default ReviewsFilterBlock;
