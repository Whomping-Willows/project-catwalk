/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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
    if (!forNum) {
      return 0;
    }
    return ((forNum / total) * 100).toFixed(0);
  };

  const reviews5For = Number(percentFor(props.metaData, 5));
  const reviews4For = Number(percentFor(props.metaData, 4));
  const reviews3For = Number(percentFor(props.metaData, 3));
  const reviews2For = Number(percentFor(props.metaData, 2));
  const reviews1For = Number(percentFor(props.metaData, 1));

  const filterHelper = (strNum, setFilterFunc) => {
    var oldFilter = [];
    var i = 0;
    const num = Number(strNum);

    if (props.filter.includes(num)) {
      oldFilter = props.filter.slice();
      i = oldFilter.indexOf(num);
      oldFilter.splice(i, 1);
      props.setFilter(oldFilter);
      setFilterFunc('off');
    } else {
      oldFilter = props.filter.slice();
      oldFilter.push(num);
      props.setFilter(oldFilter);
      setFilterFunc('on');
    }
  };

  const changeListByFilter = (e) => {
    const el = e.target.id;

    if (el.includes('5')) {
      filterHelper('5', props.setFilter5);
    } else if (el.includes('4')) {
      filterHelper('4', props.setFilter4);
    } else if (el.includes('3')) {
      filterHelper('3', props.setFilter3);
    } else if (el.includes('2')) {
      filterHelper('2', props.setFilter2);
    } else if (el.includes('1')) {
      filterHelper('1', props.setFilter1);
    }
  };

  return (
    <div id="reviewsFilterBlock">
      {props.filter5 === 'off' && (
      <div className="filterBar" id="5" onClick={changeListByFilter}>
        <p className="reviewsFilterLabel" id="reviews5Label">5 Stars</p>
        <div id="reviews5Data">
          <HSBar height={10} data={[{ value: reviews5For, color: 'green' }, { value: 100 - reviews5For, color: 'lightgrey' }]} className="reviewsBar" id="5" />
        </div>
      </div>
      )}
      {props.filter5 === 'on' && (
      <div className="filterBarOn" id="5" onClick={changeListByFilter}>
        <p className="reviewsFilterLabel" id="reviews5Label">5 Stars</p>
        <div id="reviews5Data">
          <HSBar height={10} data={[{ value: reviews5For, color: 'green' }, { value: 100 - reviews5For, color: 'lightgrey' }]} className="reviewsBar" id="5" />
        </div>
      </div>
      )}
      {props.filter4 === 'off' && (
      <div className="filterBar" id="4" onClick={changeListByFilter}>
        <p className="reviewsFilterLabel" id="reviews4Label">4 Stars</p>
        <div id="reviews4Data">
          <HSBar height={10} data={[{ value: reviews4For, color: 'green' }, { value: 100 - reviews4For, color: 'lightgrey' }]} className="reviewsBar" id="4" />
        </div>
      </div>
      )}
      {props.filter4 === 'on' && (
        <div className="filterBarOn" id="4" onClick={changeListByFilter}>
          <p className="reviewsFilterLabel" id="reviews4Label">4 Stars</p>
          <div id="reviews4Data">
            <HSBar height={10} data={[{ value: reviews4For, color: 'green' }, { value: 100 - reviews4For, color: 'lightgrey' }]} className="reviewsBar" id="4" />
          </div>
        </div>
      )}
      {props.filter3 === 'off' && (
      <div className="filterBar" id="3" onClick={changeListByFilter}>
        <p className="reviewsFilterLabel" id="reviews3Label">3 Stars</p>
        <div id="reviews3Data">
          <HSBar height={10} data={[{ value: reviews3For, color: 'green' }, { value: 100 - reviews3For, color: 'lightgrey' }]} className="reviewsBar" id="3" />
        </div>
      </div>
      )}
      {props.filter3 === 'on' && (
        <div className="filterBarOn" id="3" onClick={changeListByFilter}>
          <p className="reviewsFilterLabel" id="reviews3Label">3 Stars</p>
          <div id="reviews3Data">
            <HSBar height={10} data={[{ value: reviews3For, color: 'green' }, { value: 100 - reviews3For, color: 'lightgrey' }]} className="reviewsBar" id="3" />
          </div>
        </div>
      )}
      {props.filter2 === 'off' && (
      <div className="filterBar" id="2" onClick={changeListByFilter}>
        <p className="reviewsFilterLabel" id="reviews2Label">2 Stars</p>
        <div id="reviews2Data">
          <HSBar height={10} data={[{ value: reviews2For, color: 'green' }, { value: 100 - reviews2For, color: 'lightgrey' }]} className="reviewsBar" id="2" />
        </div>
      </div>
      )}
      {props.filter2 === 'on' && (
      <div className="filterBarOn" id="2" onClick={changeListByFilter}>
        <p className="reviewsFilterLabel" id="reviews2Label">2 Stars</p>
        <div id="reviews2Data">
          <HSBar height={10} data={[{ value: reviews2For, color: 'green' }, { value: 100 - reviews2For, color: 'lightgrey' }]} className="reviewsBar" id="2" />
        </div>
      </div>
      )}
      {props.filter1 === 'off' && (
      <div className="filterBar" id="1" onClick={changeListByFilter}>
        <p className="reviewsFilterLabel" id="reviews1Label">1 Stars</p>
        <div id="reviews1Data">
          <HSBar height={10} data={[{ value: reviews1For, color: 'green' }, { value: 100 - reviews1For, color: 'lightgrey' }]} className="reviewsBar" id="1" />
        </div>
      </div>
      )}
      {props.filter1 === 'on' && (
      <div className="filterBarOn" id="1" onClick={changeListByFilter}>
        <p className="reviewsFilterLabel" id="reviews1Label">1 Stars</p>
        <div id="reviews1Data">
          <HSBar height={10} data={[{ value: reviews1For, color: 'green' }, { value: 100 - reviews1For, color: 'lightgrey' }]} className="reviewsBar" id="1" />
        </div>
      </div>
      )}
    </div>
  );
};

export default ReviewsFilter;
