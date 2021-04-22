/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
import React from 'react';
import HSBar from 'react-horizontal-stacked-bar-chart';
import getNumOfReviews from '../../helpers/getNumOfReviews.js';

const ReviewsFilter = (props) => {
  const percentFor = (data, num) => {
    const total = getNumOfReviews(data);
    const forNum = Number(data.ratings[num]);

    return ((forNum / total) * 100).toFixed(0);
  };

  const reviews5For = Number(percentFor(props.metaData, 5));
  const reviews4For = Number(percentFor(props.metaData, 4));
  const reviews3For = Number(percentFor(props.metaData, 3));
  const reviews2For = Number(percentFor(props.metaData, 2));
  const reviews1For = Number(percentFor(props.metaData, 1));

  const changeListByFilter = (e) => {
    const el = e.target;
    if (el.innerHTML.includes('5')) {
      if (props.filter.rating === 5) {
        props.setFilter({ rating: 'all' });
      } else {
        props.setFilter({ rating: 5 });
      }
    } else if (el.innerHTML.includes('4')) {
      if (props.filter.rating === 4) {
        props.setFilter({ rating: 'all' });
      } else {
        props.setFilter({ rating: 4 });
      }
    } else if (el.innerHTML.includes('3')) {
      if (props.filter.rating === 3) {
        props.setFilter({ rating: 'all' });
      } else {
        props.setFilter({ rating: 3 });
      }
    } else if (el.innerHTML.includes('2')) {
      if (props.filter.rating === 2) {
        props.setFilter({ rating: 'all' });
      } else {
        props.setFilter({ rating: 2 });
      }
    } else if (el.innerHTML.includes('1')) {
      if (props.filter.rating === 1) {
        props.setFilter({ rating: 'all' });
      } else {
        props.setFilter({ rating: 1 });
      }
    }
  };

  return (
    <div id="reviewsFilterBlock">
      <button type="button" className="filterBar" onClick={changeListByFilter}>
        <p className="reviewsFilterLabel" id="reviews5Label">5 Stars</p>
        <div id="reviews5Data">
          <HSBar height={10} data={[{ value: reviews5For, color: 'green' }, { value: 100 - reviews5For, color: 'lightgrey' }]} className="reviewsBar" />
        </div>
      </button>
      <button type="button" className="filterBar" onClick={changeListByFilter}>
        <p className="reviewsFilterLabel" id="reviews4Label">4 Stars</p>
        <div id="reviews4Data">
          <HSBar height={10} data={[{ value: reviews4For, color: 'green' }, { value: 100 - reviews4For, color: 'lightgrey' }]} className="reviewsBar" />
        </div>
      </button>
      <button type="button" className="filterBar" onClick={changeListByFilter}>
        <p className="reviewsFilterLabel" id="reviews3Label">3 Stars</p>
        <div id="reviews3Data">
          <HSBar height={10} data={[{ value: reviews3For, color: 'green' }, { value: 100 - reviews3For, color: 'lightgrey' }]} className="reviewsBar" />
        </div>
      </button>
      <button type="button" className="filterBar" onClick={changeListByFilter}>
        <p className="reviewsFilterLabel" id="reviews2Label">2 Stars</p>
        <div id="reviews2Data">
          <HSBar height={10} data={[{ value: reviews2For, color: 'green' }, { value: 100 - reviews2For, color: 'lightgrey' }]} className="reviewsBar" />
        </div>
      </button>
      <button type="button" className="filterBar" onClick={changeListByFilter}>
        <p className="reviewsFilterLabel" id="reviews1Label">1 Stars</p>
        <div id="reviews1Data">
          <HSBar height={10} data={[{ value: reviews1For, color: 'green' }, { value: 100 - reviews1For, color: 'lightgrey' }]} className="reviewsBar" />
        </div>
      </button>
    </div>
  );
};

export default ReviewsFilter;
