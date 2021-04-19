/* eslint-disable import/no-unresolved */
import React from 'react';
import HSBar from 'react-horizontal-stacked-bar-chart';

const ReviewsFilterBlock = () => (
  <div id="reviewsFilterBlock">
    <div id="reviews5Stars">
      <p id="reviews5Label">5 Stars</p>
      <HSBar data={[{ value: 7 }, { value: 3 }]} className="reviewsBar" id="reviews5Data" />
    </div>
    <div id="reviews4Stars">
      <p id="reviews4Label">4 Stars</p>
      <HSBar data={[{ value: 9 }, { value: 1 }]} className="reviewsBar" id="reviews4Data" />
    </div>
    <div id="reviews3Stars">
      <p id="reviews3Label">3 Stars</p>
      <HSBar data={[{ value: 1 }, { value: 9 }]} className="reviewsBar" id="reviews3Data" />
    </div>
    <div id="reviews2Stars">
      <p id="reviews2Label">2 Stars</p>
      <HSBar data={[{ value: 0 }, { value: 10 }]} className="reviewsBar" id="reviews2Data" />
    </div>
    <div id="reviews1Stars">
      <p id="reviews1Label">1 Stars</p>
      <HSBar data={[{ value: 2 }, { value: 8 }]} className="reviewsBar" id="reviews1Data" />
    </div>
  </div>
);

export default ReviewsFilterBlock;
