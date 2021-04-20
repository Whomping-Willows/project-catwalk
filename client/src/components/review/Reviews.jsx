/* eslint-disable import/extensions */
import React, { useState, useContext } from 'react';
import { ApiContext } from '../../contexts/api.context.jsx';
import ReviewsBreakdown from './ReviewsBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';
import ReviewsForm from './ReviewsForm.jsx';

const reviewsData = {
  product: '18078',
  page: 0,
  count: 5,
  results: [
    {
      review_id: 289045,
      rating: 1,
      summary: 'title',
      recommend: true,
      response: null,
      body: 'body',
      date: '2021-03-13T00:00:00.000Z',
      reviewer_name: 'user',
      helpfulness: 2,
      photos: [],
    },
    {
      review_id: 289043,
      rating: 2,
      summary: 'cd',
      recommend: false,
      response: null,
      body: 'css',
      date: '2021-03-13T00:00:00.000Z',
      reviewer_name: 'Taylor Smart',
      helpfulness: 0,
      photos: [Array],
    },
    {
      review_id: 289038,
      rating: 2,
      summary: 'This product was amazing, I bought every style!',
      recommend: true,
      response: "We're so happy that you enjoyed our product. This is definitely a favorite for many!",
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut interdum metus. Nunc eget lacinia ex. Duis elementum efficitur eros, eget maximus risus porttitor vitae. Integer sit amet nisl eget sapien sagittis dapibus. Suspendisse gravida sit non.',
      date: '2021-03-13T00:00:00.000Z',
      reviewer_name: 'Taylor Smart',
      helpfulness: 18,
      photos: [Array],
    },
    {
      review_id: 289034,
      rating: 2,
      summary: 'fffeee',
      recommend: false,
      response: null,
      body: 'fffdsss',
      date: '2021-03-13T00:00:00.000Z',
      reviewer_name: 'Taylor Smart',
      helpfulness: 0,
      photos: [Array],
    },
    {
      review_id: 289033,
      rating: 2,
      summary: 'fews',
      recommend: false,
      response: null,
      body: 'fdsfes',
      date: '2021-03-13T00:00:00.000Z',
      reviewer_name: 'Taylor Smart',
      helpfulness: 0,
      photos: [Array],
    },
  ],
};

const rmetaData = {
  product_id: '18078',
  ratings: {
    1: '5', 2: '11', 3: '5', 4: '8', 5: '16', 6: '1',
  },
  recommended: { false: '24', true: '22' },
  characteristics: {
    Fit: { id: 60618, value: '2.3125000000000000' },
    Length: { id: 60619, value: '2.5000000000000000' },
    Comfort: { id: 60620, value: '2.6250000000000000' },
    Quality: { id: 60621, value: '2.6250000000000000' },
  },
};

const Reviews = () => {
  const [reviewsProductData, setReviewsProductData] = useState(reviewsData);
  const [reviewsMetaData, setReviewsMetaData] = useState(rmetaData);

  const { productId, setProductId, reviewId, apiProductIdQuery, end, getRequest, putRequest } = useContext(ApiContext);
  const testChangeProductId = () => {
    console.log('clicked change product id button');
    setProductId(18079);
  };

  return (
    <div className="reviews">
      <h2>RATINGS & REVIEWS</h2>
      <button className="button" id="testbutton2" type="submit" aria-label="get a new productId" onClick={testChangeProductId}>Change Product Id</button>
      <ReviewsBreakdown
        reviewsProductData={reviewsProductData}
        reviewsMetaData={reviewsMetaData}
      />
      <ReviewsList
        reviewsProductData={reviewsProductData}
        reviewsMetaData={reviewsMetaData}
      />
      <ReviewsForm
        reviewsProductData={reviewsProductData}
        reviewsMetaData={reviewsMetaData}
      />
    </div>
  );
};

export default Reviews;
