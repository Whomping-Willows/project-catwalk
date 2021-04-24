/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../../contexts/api.context.jsx';
import ProductDescription from './productDescription.jsx';
import ProductGallery from './productGallery.jsx';
import ProductName from './productName.jsx';
import ProductStars from './productStars.jsx';
import ProductStyles from './productStyles.jsx';
import ProductCart from './productCart.jsx';

const Product = (props) => (
  <div className="product">
    <ProductGallery />
    <ProductStars />
    <ProductName product={props.currentProduct} />
    <ProductStyles styles={props.currentStyles} />
    <ProductCart />
    <ProductDescription />
  </div>
);

export default Product;
