/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../contexts/api.context.jsx';
import Product from './product/Product.jsx';
import Related from './related/Related.jsx';
import Question from './question/Question.jsx';
import Reviews from './review/Reviews.jsx';

const stylesDefaultData = {
  product_id: '18078',
  results:
  [{
    style_id: 96887,
    name: 'Forest Green & Black',
    original_price: '140.00',
    sale_price: null,
    'default?': true,
    photos: [
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
    ],
    skus: {},
  },
  {
    style_id: 96888,
    name: 'Desert Brown & Tan',
    original_price: '140.00',
    sale_price: null,
    'default?': false,
    photos: [
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
      },
    ],
    skus: {},
  }],
};

const curProductDefaultData = {
  id: 18078,
  campus: 'hr-bld',
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description:
    'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  category: 'Jackets',
  default_price: '140.00',
  created_at: '2021-02-23T05:08:00.350Z',
  updated_at: '2021-02-23T05:08:00.350Z',
  features:
    [
      { feature: 'Fabric', value: 'Canvas' },
      { feature: 'Buttons', value: 'Brass' },
    ],
};

const API = () => {
  const [currentProduct, setCurrentProduct] = useState(curProductDefaultData);
  const [currentStyles, setCurrentStyles] = useState(stylesDefaultData);

  const { getRequest, end } = useContext(ApiContext);

  useEffect(() => {
    getRequest(end.listInfo, setCurrentProduct);
    getRequest(end.productStyles, setCurrentStyles);
  }, []);

  return (
    <div className="appContainer">
      <Product
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
        currentStyles={currentStyles}
        setCurrentStyles={setCurrentStyles}
      />
      <Related
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
        currentStyles={currentStyles}
        setCurrentStyles={setCurrentStyles}
      />
      <Question />
      <Reviews />
    </div>
  );
};

export default API;
