/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/named */
/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../../contexts/api.context.jsx';
import ReviewsBreakdown from './ReviewsBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';

const Reviews = () => {
  const [reviewsProductData, setReviewsProductData] = useState();
  const [reviewsMetaData, setReviewsMetaData] = useState();
  const [reviewsFilter, setReviewsFilter] = useState([]);
  const [filter5, setFilter5] = useState('off');
  const [filter4, setFilter4] = useState('off');
  const [filter3, setFilter3] = useState('off');
  const [filter2, setFilter2] = useState('off');
  const [filter1, setFilter1] = useState('off');

  const { end, getRequest } = useContext(ApiContext);

  useEffect(() => {
    getRequest(end.reviews, setReviewsProductData);
    getRequest(end.reviewsMeta, setReviewsMetaData);
  }, []);

  return (
    <div id="reviews">
      {reviewsProductData && reviewsMetaData
        && (
          <>
            <h2>RATINGS & REVIEWS</h2>
            <ReviewsBreakdown
              reviewsProductData={reviewsProductData}
              reviewsMetaData={reviewsMetaData}
              filter={reviewsFilter}
              setFilter={setReviewsFilter}
              filter5={filter5}
              setFilter5={setFilter5}
              filter4={filter4}
              setFilter4={setFilter4}
              filter3={filter3}
              setFilter3={setFilter3}
              filter2={filter2}
              setFilter2={setFilter2}
              filter1={filter1}
              setFilter1={setFilter1}
            />
            <ReviewsList
              reviewsProductData={reviewsProductData}
              reviewsMetaData={reviewsMetaData}
              filter={reviewsFilter}
              setFilter={setReviewsFilter}
            />
          </>
        )}
    </div>
  );
};

export default Reviews;

// EXAMPLE DATA
// const metaDefault = {
//   product_id: '18078',
//   ratings: {
//     1: '5', 2: '11', 3: '5', 4: '8', 5: '18', 6: '1',
//   },
//   recommended: { false: '24', true: '24' },
//   characteristics: {
//     Fit: { id: 60618, value: '2.6111111111111111' },
//     Length: { id: 60619, value: '2.7777777777777778' },
//     Comfort: { id: 60620, value: '2.8888888888888889' },
//     Quality: { id: 60621, value: '2.7647058823529412' },
//   },
// };

// const productDataDefault = {
//   product: '18078',
//   page: 0,
//   count: 5,
//   results: [
//     {
//       review_id: 289045,
//       rating: 1,
//       summary: 'title',
//       recommend: true,
//       response: null,
//       body: 'body',
//       date: '2021-03-13T00:00:00.000Z',
//       reviewer_name: 'user',
//       helpfulness: 2,
//       photos: [],
//     },
//     {
//       review_id: 289052,
//       rating: 5,
//       summary: 'its working',
//       recommend: true,
//       response: null,
//       body: 'ITS ALIVE! MY BEAUTIFUL CREATION IS ALIVE!',
//       date: '2021-03-13T00:00:00.000Z',
//       reviewer_name: 'ITS WORKING',
//       helpfulness: 0,
//       photos: [],
//     },
//     {
//       review_id: 289043,
//       rating: 2,
//       summary: 'cd',
//       recommend: false,
//       response: null,
//       body: 'css',
//       date: '2021-03-13T00:00:00.000Z',
//       reviewer_name: 'Taylor Smart',
//       helpfulness: 0,
//       photos: [Array],
//     },
//     {
//       review_id: 289034,
//       rating: 2,
//       summary: 'fffeee',
//       recommend: false,
//       response: null,
//       body: 'fffdsss',
//       date: '2021-03-13T00:00:00.000Z',
//       reviewer_name: 'Taylor Smart',
//       helpfulness: 0,
//       photos: [Array],
//     },
//     {
//       review_id: 289033,
//       rating: 2,
//       summary: 'fews',
//       recommend: false,
//       response: null,
//       body: 'fdsfes',
//       date: '2021-03-13T00:00:00.000Z',
//       reviewer_name: 'Taylor Smart',
//       helpfulness: 0,
//       photos: [Array],
//     },
//   ],
// };
