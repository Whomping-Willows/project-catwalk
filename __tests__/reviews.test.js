/* eslint-disable import/extensions */
import React from 'react';
import { render } from '../utils/test-utils.jsx';
import { userEvent, screen } from '@testing-library/react';
import App from '../client/src/App.jsx';
import Reviews from '../client/src/components/review/Reviews.jsx';
import ReviewsSummary from '../client/src/components/review/ReviewsSummary.jsx';
import ReviewsChars from '../client/src/components/review/ReviewsChars.jsx';
import ReviewsList from '../client/src/components/review/ReviewsList.jsx';
import getReviewsAvg from '../client/src/helpers/getReviewsAvg.js';

describe('Reviews tests', () => {

  const testMeta = {
    product_id: '18078',
    ratings: {
      1: '5', 2: '11', 3: '5', 4: '8', 5: '18', 6: '1',
    },
    recommended: { false: '24', true: '24' },
    characteristics: {
      Fit: { id: 60618, value: '2.6111111111111111' },
      Length: { id: 60619, value: '2.7777777777777778' },
      Comfort: { id: 60620, value: '2.8888888888888889' },
      Quality: { id: 60621, value: '2.7647058823529412' },
    },
  };

  const testProduct = {
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
        review_id: 289052,
        rating: 5,
        summary: 'its working',
        recommend: true,
        response: null,
        body: 'ITS ALIVE! MY BEAUTIFUL CREATION IS ALIVE!',
        date: '2021-03-13T00:00:00.000Z',
        reviewer_name: 'ITS WORKING',
        helpfulness: 0,
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

  const getNumOfReviews = (metaData) => {
    let numOfReviews = 0;

    const values = Object.values(metaData.ratings);
    values.forEach((val) => {
      numOfReviews += Number(val);
    });

    return numOfReviews;
  };

  it('should render the reviews component without crashing', () => {
    render(<Reviews />);
  });

  it('should display the avg rating for the current product', () => {
    render(<Reviews />);
    const checkThis = render(<ReviewsSummary metaData={testMeta} productData={testProduct} />);
    const overallRating = getReviewsAvg(testMeta);
    checkThis.getByText(overallRating);
  });

  it('should display the comfort factor breakdown if that product uses it', () => {
    render(<Reviews />);
    const checkThis = render(<ReviewsChars metaData={testMeta} productData={testProduct} />);
    checkThis.getByText('Comfort');
  });

  // it('should display a sorted list of reviews by date when newest is selected', () => {
  //   render(<Reviews />);
  //   const reviewsInList = testProduct.results;
  //   const checkThis = render(<ReviewsList reviewsMetaData={testMeta} reviewsProductData={testProduct} />);
  //   const reviewsSorted = reviewsInList.sort((a, b) => new Date(b.date) - new Date(a.date));
  //   checkThis.getByText(reviewsSorted.summary);
  //   fireEvent.
  // });

});