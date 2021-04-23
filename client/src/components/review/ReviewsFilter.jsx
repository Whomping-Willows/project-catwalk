/* eslint-disable no-var */
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
    var oldFilter = [];
    var i = 0;

    const el = e.target;

    if (el.innerHTML.includes('5')) {
      if (props.filter.includes(5)) {
        oldFilter = props.filter.slice();
        i = oldFilter.indexOf(5);
        oldFilter.splice(i, 1);
        props.setFilter(oldFilter);
        // props.setFilterOn(false);
      } else {
        oldFilter = props.filter.slice();
        oldFilter.push(5);
        props.setFilter(oldFilter);
      }
    } else if (el.innerHTML.includes('4')) {
      if (props.filter.includes(4)) {
        oldFilter = props.filter.slice();
        i = oldFilter.indexOf(4);
        oldFilter.splice(i, 1);
        props.setFilter(oldFilter);
        // props.setFilterOn(false);
      } else {
        oldFilter = props.filter.slice();
        oldFilter.push(4);
        props.setFilter(oldFilter);
      }
    } else if (el.innerHTML.includes('3')) {
      if (props.filter.includes(3)) {
        oldFilter = props.filter.slice();
        i = oldFilter.indexOf(3);
        oldFilter.splice(i, 1);
        props.setFilter(oldFilter);
        // props.setFilterOn(false);
      } else {
        oldFilter = props.filter.slice();
        oldFilter.push(3);
        props.setFilter(oldFilter);
      }
    } else if (el.innerHTML.includes('2')) {
      if (props.filter.includes(2)) {
        oldFilter = props.filter.slice();
        i = oldFilter.indexOf(2);
        oldFilter.splice(i, 1);
        props.setFilter(oldFilter);
        // props.setFilterOn(false);
      } else {
        oldFilter = props.filter.slice();
        oldFilter.push(2);
        props.setFilter(oldFilter);
      }
    } else if (el.innerHTML.includes('1')) {
      if (props.filter.includes(1)) {
        oldFilter = props.filter.slice();
        i = oldFilter.indexOf(1);
        oldFilter.splice(i, 1);
        props.setFilter(oldFilter);
        // props.setFilterOn(false);
      } else {
        oldFilter = props.filter.slice();
        oldFilter.push(1);
        props.setFilter(oldFilter);
      }
    }
  };

  return (
    <div id="reviewsFilterBlock">
      <div className="filterBar" id="5" onClick={changeListByFilter}>
        <p className="reviewsFilterLabel" id="reviews5Label">5 Stars</p>
        <div id="reviews5Data">
          <HSBar height={10} data={[{ value: reviews5For, color: 'green' }, { value: 100 - reviews5For, color: 'lightgrey' }]} className="reviewsBar" id="5" />
        </div>
      </div>
      <div className="filterBar" onClick={changeListByFilter}>
        <p className="reviewsFilterLabel" id="reviews4Label">4 Stars</p>
        <div id="reviews4Data">
          <HSBar height={10} data={[{ value: reviews4For, color: 'green' }, { value: 100 - reviews4For, color: 'lightgrey' }]} className="reviewsBar" id="4" />
        </div>
      </div>
      <div className="filterBar" onClick={changeListByFilter}>
        <p className="reviewsFilterLabel" id="reviews3Label">3 Stars</p>
        <div id="reviews3Data">
          <HSBar height={10} data={[{ value: reviews3For, color: 'green' }, { value: 100 - reviews3For, color: 'lightgrey' }]} className="reviewsBar" />
        </div>
      </div>
      <div className="filterBar" onClick={changeListByFilter}>
        <p className="reviewsFilterLabel" id="reviews2Label">2 Stars</p>
        <div id="reviews2Data">
          <HSBar height={10} data={[{ value: reviews2For, color: 'green' }, { value: 100 - reviews2For, color: 'lightgrey' }]} className="reviewsBar" />
        </div>
      </div>
      <div className="filterBar" onClick={changeListByFilter}>
        <p className="reviewsFilterLabel" id="reviews1Label">1 Stars</p>
        <div id="reviews1Data">
          <HSBar height={10} data={[{ value: reviews1For, color: 'green' }, { value: 100 - reviews1For, color: 'lightgrey' }]} className="reviewsBar" />
        </div>
      </div>
    </div>
  );
};

export default ReviewsFilter;
