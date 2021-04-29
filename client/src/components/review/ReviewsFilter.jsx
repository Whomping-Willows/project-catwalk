/* eslint-disable no-var */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import HSBar from 'react-horizontal-stacked-bar-chart';
import getNumOfReviews from '../../helpers/getNumOfReviews.js';

const ReviewsFilter = ({ metaData, filter, setFilter }) => {
  const percentFor = (data, num) => {
    const total = getNumOfReviews(data);
    const forNum = Number(data.ratings[num]);
    if (!forNum) {
      return 0;
    }
    return ((forNum / total) * 100).toFixed(0);
  };

  const startInfo = [
    {
      id: 5,
      label: '5 Stars',
      value: Number(percentFor(metaData, 5)),
      active: false,
    },
    {
      id: 4,
      label: '4 Stars',
      value: Number(percentFor(metaData, 4)),
      active: false,
    },
    {
      id: 3,
      label: '3 Stars',
      value: Number(percentFor(metaData, 3)),
      active: false,
    },
    {
      id: 2,
      label: '2 Stars',
      value: Number(percentFor(metaData, 2)),
      active: false,
    },
    {
      id: 1,
      label: '1 Stars',
      value: Number(percentFor(metaData, 1)),
      active: false,
    },
  ];

  const [filterInfo, setFilterInfo] = useState(startInfo);

  const filterHelper = (strNum) => {
    var oldFilter;
    var oldInfo;
    var i;
    const num = Number(strNum);
    const indexKey = {
      5: 0, 4: 1, 3: 2, 2: 3, 1: 4,
    };

    if (filter.includes(num)) {
      oldFilter = filter.slice();
      i = oldFilter.indexOf(num);
      oldFilter.splice(i, 1);
      setFilter(oldFilter);
      oldInfo = filterInfo.slice();
      i = indexKey[num];
      oldInfo[i].active = false;
      setFilterInfo(oldInfo);
    } else {
      oldFilter = filter.slice();
      oldFilter.push(num);
      setFilter(oldFilter);
      oldInfo = filterInfo.slice();
      i = indexKey[num];
      oldInfo[i].active = true;
      setFilterInfo(oldInfo);
    }
  };

  const changeListByFilter = (e) => {
    const el = e.target.id;

    if (el.includes('5')) {
      filterHelper('5');
    } else if (el.includes('4')) {
      filterHelper('4');
    } else if (el.includes('3')) {
      filterHelper('3');
    } else if (el.includes('2')) {
      filterHelper('2');
    } else if (el.includes('1')) {
      filterHelper('1');
    }
  };

  return (
    <div id="reviewsFilterBlock">
      {filterInfo.map((num) => (
        <>
          {num.active === false && (
          <div className="filterBar" role="checkbox" id={num.id} key={`${num.id}-off`} onClick={changeListByFilter} onKeyDown={changeListByFilter} aria-checked="false" tabIndex={0}>
            <p className="reviewsFilterLabel" id={num.id}>{num.label}</p>
            <div id="reviewsData">
              <HSBar height={10} data={[{ value: num.value, color: 'green' }, { value: 100 - num.value, color: 'lightgrey' }]} className="reviewsBar" id={num.id} />
            </div>
          </div>
          )}
          {num.active === true && (
          <div className="filterBarOn" role="checkbox" id={num.id} key={`${num.id}-on`} onClick={changeListByFilter} onKeyDown={changeListByFilter} aria-checked="true" tabIndex={0}>
            <p className="reviewsFilterLabel" id={num.id}>{num.label}</p>
            <div id="reviewsData">
              <HSBar height={10} data={[{ value: num.value, color: 'green' }, { value: 100 - num.value, color: 'lightgrey' }]} className="reviewsBar" id={num.id} />
            </div>
          </div>
          )}
        </>
      ))}
    </div>
  );
};

export default ReviewsFilter;
