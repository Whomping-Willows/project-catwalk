/* eslint-disable import/extensions */
import React from 'react';
import ReviewsBreakdown from './ReviewsBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';
import ReviewsForm from './ReviewsForm.jsx';

export const reviewsData = {
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

const Reviews = () => (
  <div className="reviews">
    <h2>RATINGS & REVIEWS</h2>
    <ReviewsBreakdown />
    <ReviewsList />
    <ReviewsForm />
  </div>
);

export default Reviews;
